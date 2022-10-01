import {api} from "../api/api";
import {Todo} from "../../types/todo.type";

const todosEndpoint = api.injectEndpoints({
    endpoints: (builder) => ({
        todos: builder.query<Todo[], void>({
            query: () => ({
                url:'todos?_limit=8',
                method: 'GET',
            }),
            providesTags: ['Todo'],
        }),
        todo: builder.mutation<Todo, Todo[]>({
            query: (todo)=>({
                url:'todos',
                method: 'POST',
                body:todo
            }),
            invalidatesTags: ['Todo'],
        }),
        update: builder.mutation<Todo[],Todo>({
            query: (todo)=>({
                url:`todos/${todo.id}`,
                method: 'PUT',
                body:{...todo, completed: !todo.completed}
            }),
            invalidatesTags: ['Todo'],
        }),
        delete: builder.mutation<Todo[],Todo>({
            query: (todo)=>({
                url:`todos/${todo.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Todo'],
        })
    })
})

export const {useTodosQuery, useTodoMutation, useUpdateMutation, useDeleteMutation} = todosEndpoint;
