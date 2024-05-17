import { FetchAPI } from "./api";
import fetch from "node-fetch";

const fetchApi: FetchAPI = fetch as unknown as FetchAPI;

const offlineFetchApi: FetchAPI = async (
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  input: RequestInfo | URL,
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  init?: RequestInit | undefined,
): Promise<Response> => {
  return new Response(JSON.stringify({}), {
    status: 200,
    statusText: "OK",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });
};

export { fetchApi, offlineFetchApi };
