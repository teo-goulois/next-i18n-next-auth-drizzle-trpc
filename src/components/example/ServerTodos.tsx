import React from "react";
import { serverClient } from "@/app/_trpc/serverClient";
import { getAuthSession } from "@/lib/auth/config";

export const ServerTodos = async () => {
  const session = await getAuthSession();
  const trpc = await serverClient();
  const publicTodo = await trpc.todo.getTodosPublic();
  if (!session)
    return (
      <div>
        no session
        <div className="">{JSON.stringify(publicTodo)}</div>
      </div>
    );
  const protectedTodo = await trpc.todo.getTodosPrivate();

  return (
    <div>
      <div className="">{JSON.stringify(publicTodo)}</div>
      <p>---------------</p>
      <div className="">{JSON.stringify(protectedTodo)}</div>
    </div>
  );
};
