import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [],
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                state.todos.push(action.payload)
            },
            prepare: (text) => ({
                payload: {
                    id: nanoid(),
                    text,
                },
            }),
        },
    },
})

export const { addTodo } = todoSlice.actions
export const selectTodos = (state) => state.todo.todos
export default todoSlice.reducer
