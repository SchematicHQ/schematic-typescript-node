# schematic-typescript-node

## Installation and Setup

1. Install the TypeScript library using your package manager of choice:

```bash
npm install @schematichq/schematic-typescript-node
yarn add @schematichq/schematic-typescript-node
```

2. [Issue an API key](https://docs.schematichq.com/quickstart#create-an-api-key) for the appropriate environment using the [Schematic app](https://app.schematichq.com/settings/api-keys). Be sure to capture the secret key when you issue the API key; you'll only see this key once, and this is what you'll use with schematic-typescript-node.

3. Using this secret key, initialize a client in your application:

```ts
import { Schematic } from "@schematichq/schematic-typescript-node";

const apiKey = process.env.SCHEMATIC_API_KEY;
const client = new Schematic(apiKey);

// interactions with the client

client.close();
```

By default, the client will do some local caching for flag checks. If you would like to change this behavior, you can do so using an initialization option to specify the max size of the cache (in bytes) and the max age of the cache (in seconds):

```ts
import { LocalCache, Schematic } from "@schematichq/schematic-typescript-node";

const apiKey = process.env.SCHEMATIC_API_KEY;
const cacheSizeBytes = 1000000;
const cacheTTL = 1000; // in milliseconds
const client = new Schematic(apiKey, {
  cacheProviders: {
    flagChecks: [
      new LocalCache<boolean>({ size: cacheSizeBytes, ttl: cacheTTL }),
    ],
  },
});

// interactions with the client

client.close();
```

You can also disable local caching entirely with an initialization option; bear in mind that, in this case, every flag check will result in a network request:

```ts
import { Schematic } from "@schematichq/schematic-typescript-node";

const apiKey = process.env.SCHEMATIC_API_KEY;
const client = new Schematic(apiKey, {
  cacheProviders: {
    flagChecks: [],
  },
});

// interactions with the client

client.close();
```

You may want to specify default flag values for your application, which will be used if there is a service interruption or if the client is running in offline mode (see below). You can do this using an initialization option:

```ts
import { Schematic } from "@schematichq/schematic-typescript-node";

const apiKey = process.env.SCHEMATIC_API_KEY;
const client = new Schematic(apiKey, {
  flagDefaults: {
    "some-flag-key": true,
  },
});

// interactions with the client

client.close();
```

## Usage examples

### Sending identify events

Create or update users and companies using identify events.

```ts
import { Schematic, api } from "@schematichq/schematic-typescript-node";

const client = new Schematic(process.env.SCHEMATIC_API_KEY);

client.identify({
  event: "some-action",
  company: {
    id: "your-company-id",
  },
  user: {
    email: "wcoyote@acme.net",
    userId: "your-user-id",
  },
  name: "Wile E. Coyote",
  traits: {
    city: "Atlanta",
    loginCount: 24,
    isStaff: false,
  },
});

client.close();
```

This call is non-blocking and there is no response to check.

### Sending track events

Track activity in your application using track events; these events can later be used to produce metrics for targeting.

```ts
import { Schematic } from "@schematichq/schematic-typescript-node";

const client = new Schematic(process.env.SCHEMATIC_API_KEY);

client.track({
  event: "some-action",
  company: {
    id: "your-company-id",
  },
  user: {
    email: "wcoyote@acme.net",
    userId: "your-user-id",
  },
});

client.close();
```

This call is non-blocking and there is no response to check.

### Creating and updating companies

Although it is faster to create companies and users via identify events, if you need to handle a response, you can use the companies API to upsert companies. Because you use your own identifiers to identify companies, rather than a Schematic company ID, creating and updating companies are both done via the same upsert operation:

```ts
import { Schematic, api } from "@schematichq/schematic-typescript-node";

const client = new Schematic(process.env.SCHEMATIC_API_KEY);

const body: api.UpsertCompanyRequestBody = {
  keys: {
    id: "your-company-id",
  },
  name: "Acme Widgets, Inc.",
  traits: {
    city: "Atlanta",
    highScore: 25,
    isActive: true,
  },
};

client.Companies.upsertCompany(body)
  .then((response) => {
    console.log(response.data);
  })
  .catch(console.error);

client.close();
```

You can define any number of company keys; these are used to address the company in the future, for example by updating the company's traits or checking a flag for the company.

You can also define any number of company traits; these can then be used as targeting parameters.

### Creating and updating users

Similarly, you can upsert users using the Schematic API, as an alternative to using identify events. Because you use your own identifiers to identify users, rather than a Schematic user ID, creating and updating users are both done via the same upsert operation:

```ts
import { Schematic, api } from "@schematichq/schematic-typescript-node";

const client = new Schematic(process.env.SCHEMATIC_API_KEY);

const body: api.UpsertUserRequestBody = {
  keys: {
    email: "wcoyote@acme.net",
    userId: "your-user-id",
  },
  company: { id: "your-company-id" },
  name: "Wile E. Coyote",
  traits: {
    city: "Atlanta",
    loginCount: 24,
    isStaff: false,
  },
};

client.Companies.upsertUser(body)
  .then((response) => {
    console.log(response.data);
  })
  .catch(console.error);

client.close();
```

You can define any number of user keys; these are used to address the user in the future, for example by updating the user's traits or checking a flag for the user.

You can also define any number of user traits; these can then be used as targeting parameters.

### Checking flags

When checking a flag, you'll provide keys for a company and/or keys for a user. You can also provide no keys at all, in which case you'll get the default value for the flag.

```ts
import { Schematic, api } from "@schematichq/schematic-typescript-node";

const client = new Schematic(process.env.SCHEMATIC_API_KEY);

const evaluationCtx: api.CheckFlagRequestBody = {
  company: { id: "your-company-id" },
  user: {
    email: "wcoyote@acme.net",
    userId: "your-user-id",
  },
};

client
  .checkFlag(evaluationCtx, "some-flag-key")
  .then((isFlagOn) => {
    if (isFlagOn) {
      // Flag is on
    } else {
      // Flag is off
    }
  })
  .catch(console.error);

client.close();
```

### Other API operations

The Schematic API supports many operations beyond these, accessible via the API modules on the client, `Accounts`, `Billing`, `Companies`, `Entitlements`, `Events`, `Features`, and `Plans`.

## Testing

### Offline Mode

In development or testing environments, you may want to avoid making network requests to the Schematic API. You can run Schematic in offline mode by specifying the `offline` option; in this case, it does not matter what API key you specify:

```ts
import { Schematic } from "@schematichq/schematic-typescript-node";

const client = new Schematic("", { offline: true });

client.close();
```

Offline mode works well with flag defaults:

```ts
import { Schematic } from "@schematichq/schematic-typescript-node";

const client = new Schematic("", {
  flagDefaults: { "some-flag-key": true },
  offline: true,
});

// Remember to close the client when done
client.close();
```
