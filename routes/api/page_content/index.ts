import {HandlerContext, Handlers} from "$fresh/src/server/types.ts";
import {client, prisma} from "../../../main.ts";

import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

// export const client = new Client({
//     user: "nikita",
//     database: "cms",
//     hostname: "localhost",
//     port: 5432,
//     password: "jaya",
// });
// await client.connect();

export const handler: Handlers<any[] | null> = {


    async GET(_req: Request, _ctx: HandlerContext) {

        // const result = await client.queryObject("SELECT * FROM VALUES")
        // const result = await prisma.values.create({
        //     data: {
        //         key: "test",
        //         value: "hari"
        //     }
        // })

        const result = await prisma.user.findMany()

        console.log(result)
        return new Response(result)
    }
}