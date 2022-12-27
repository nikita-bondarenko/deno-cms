/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import {start} from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import {config} from "dotenv";


import {config} from "https://deno.land/std@0.163.0/dotenv/mod.ts";
import {PrismaClient} from './generated/client/deno/edge.ts'

console.log(config())


const envVars = await config()
console.log(envVars);
export const prisma = new PrismaClient({
    datasources: {
        db: {
            url: envVars.PRISMA_URL
        }
    }
})



await start(manifest);
