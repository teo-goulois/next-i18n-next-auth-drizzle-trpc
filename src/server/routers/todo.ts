import { db } from "@/lib/db";
import { router, publicProcedure, protectedProcedure } from "../trpc";
import { eq } from "drizzle-orm";
import { z } from "zod";

export const todoRouter = router({
  getTodosPublic: publicProcedure.query(async () => {
    return ["Public todo1", "Public todo2", "Public todo3"];
  }),
  getTodosPrivate: protectedProcedure.query(async () => {
    return ["Protected todo1", "Protected todo2", "Protected todo3"];
  }),
  /*  getTodos: publicProcedure.query(async () => {
    return await db.select().from(todos).all();
  }),
  addTodo: publicProcedure.input(z.string()).mutation(async (opts) => {
    await db.insert(todos).values({ content: opts.input, done: 0 }).run();
    return true;
  }),
  setDone: publicProcedure
    .input(
      z.object({
        id: z.number(),
        done: z.number(),
      })
    )
    .mutation(async (opts) => {
      await db
        .update(todos)
        .set({ done: opts.input.done })
        .where(eq(todos.id, opts.input.id));
      return true;
    }), */
});
