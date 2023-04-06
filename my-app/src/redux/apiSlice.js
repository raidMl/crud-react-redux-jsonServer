import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ['users'], //using for caching or invalidat
    endpoints: (builder) => ({

        //for read
        getUsers: builder.query({
            query: () => "/users",
            providesTags: ['users']
        }),

        //for create
        addUser: builder.mutation({
            query: (user) => ({
                url: '/users',
                method: "POST",
                body: user
            }),
            invalidatesTags: ['users']
        }),

        //for update
        updateUser: builder.mutation({
            query: (user) => ({
                url: `/users/${user.id}`,
                method: "PATCH",
                body: user
            }), invalidatesTags: ['users']

        }),

        //for delete
        deleteUser: builder.mutation({
            query: ({ id }) => ({
                url: `/users/${id}`,
                method: "DELETE",
                body: id
            }), invalidatesTags: ['users']

        })

    })

})



export const { useGetUsersQuery, useAddUserMutation, useUpdateUserMutation, useDeleteUserMutation } = apiSlice   // this is hook
