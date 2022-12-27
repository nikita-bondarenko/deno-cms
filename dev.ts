#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";

// Deno.env.set('DATA_API_KEY', 'XL09f4yxdjeKQ97ictuMhpMOSaYK5Fj6QF20sVUDd4IIXc9FK0cIBA4Gfdvg3ezo')
// Deno.env.set('APP_ID', 'data-xsrhz')
// Deno.env.set('BASE_URL', 'https://data.mongodb-api.com/app/data-xsrhz/endpoint/data/v1/action')


await dev(import.meta.url, "./main.ts");
