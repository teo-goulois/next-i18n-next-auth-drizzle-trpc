'use client'
import { trpc } from '@/app/_trpc/client'
import React from 'react'

export const Todos = () => {
    const publicTodo = trpc.todo.getTodosPublic.useQuery()
    const protectedTodo = trpc.todo.getTodosPrivate.useQuery()
  return (
    <div>
        <div className="">
            {JSON.stringify(publicTodo.data)}
        </div>
        <p>---------------</p>
        <div className="">
            {JSON.stringify(protectedTodo.data)}
        </div>
    </div>
  )
}
