import { httpBatchLink } from "@trpc/client";
import { appRouter } from "@/server";
import { getAuthSession } from "@/lib/auth/config";

export const serverClient = async  () => {
  return appRouter.createCaller({
    session: await getAuthSession(),
    // @ts-ignore
    links: [
      httpBatchLink({
        url: "http://localhost:3000/api/trpc",
      }),
    ],
  });
}
