import { FetchCreateContextFnOptions, fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@/server';
import {createContext}  from '@/server/context';
import { Session } from 'next-auth';
import { getAuthSession } from '@/lib/auth/config';
const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: async () => ({ session: await getAuthSession() }),
    onError({ error, ctx, req }) {
      console.error(req);
      return new Response('Unauthorized', {status: 401});

      if (error.code === 'INTERNAL_SERVER_ERROR') {
        return {
          status: 500,
          data: {
            message: 'Internal Server Error',
          },
        };
      }
      if (error.code === 'NOT_FOUND') {
        return {
          status: 404,
          data: {
            message: 'Not found',
          },
        };
      }
      if (error.code === 'UNAUTHORIZED') {
        return new Response('Unauthorized', {status: 401});
        return {
          status: 401,
          data: {
            message: 'Unauthorized',
          },
        };
      }
      return {
        status: 400,
        data: {
          message: error.message,
        },
      };
    }
  });

export { handler as GET, handler as POST };