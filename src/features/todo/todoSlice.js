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
                    timestamp: new Date().toLocaleString(),
                },
            }),
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    },
})

export const { addTodo, removeTodo } = todoSlice.actions
export const selectTodos = (state) => state.todo.todos
export default todoSlice.reducer