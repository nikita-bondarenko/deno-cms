/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import {start} from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

const client = new Client({
    user: "nikita",
    database: "cms",
    hostname: "localhost",
    port: 5432,
    password: "jaya",
});
await client.connect();


await start(manifest, {plugins: [twindPlugin(twindConfig)]});
