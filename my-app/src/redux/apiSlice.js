import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    endpoints: (builder) => ({

        //for read
        getUsers: builder.query({
            query: () => "/users"
        }),

        //for create
        addUser: builder.mutation({
            query: (user) => ({
                url: '/users',
                method: "POST",
                body: user
            })
        }),

        //for update
        updateUser: builder.mutation({
            query: (user) => ({
                url: `/users/${user.id}`,
                method: "PATCH",
                body: user
            })
        }),

        //for delete
        deleteUser: builder.mutation({
            query: ({ id }) => ({
                url: `/users/${id}`,
                method: "DELETE",
                body: id
            })
        })

    })

})



export const { useGetUsersQuery, useAddUserMutation, useUpdateUserMutation, useDeleteUserMutation } = apiSlice   // this is hook
