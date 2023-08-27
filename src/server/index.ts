import { publicProcedure, router } from "./trpc";
// Routers
import { todoRouter } from "./routers/todo";
export const appRouter = router({
  todo: todoRouter
  
});

/* EXEMPLES */
/*  */
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;