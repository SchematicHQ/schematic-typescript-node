#!/bin/bash

openapi-generator generate -c config.yaml && npx prettier --write src/*
