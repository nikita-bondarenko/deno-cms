import {HandlerContext, Handlers} from "$fresh/src/server/types.ts";

export const handler: Handlers<any[] | null> = {


    async GET(_req: Request, _ctx: HandlerContext) {
        return new Response('Hello')
    }
}