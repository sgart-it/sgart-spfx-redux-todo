import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../models/todo'

export interface TodoState {
    todos: Todo[];
}

const initialState: TodoState = {
    todos: [
        { id: 1, text: "Prova 1", completed: false },
        { id: 2, text: "Prova 2", completed: true }
    ]
};

let lastIndex = 2

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        // Give case reducers meaningful past-tense "event"-style names
        todoAdd(state, action: PayloadAction<string>) {
            const text = action.payload;
            // "Mutating" update syntax thanks to Immer, and no `return` needed
            state.todos.push({
                id: ++lastIndex,
                text,
                completed: false
            });
        },
        todoToggle(state, action: PayloadAction<number>) {
            // Look for the specific nested object to update.
            // In this case, `action.payload` is the default field in the action,
            // and can hold the `id` value - no need for `action.id` separately
            const found = state.todos.filter(todo => todo.id === action.payload)[0];

            if (found) {
                // Can directly "mutate" the nested object
                found.completed = !found.completed;
            }
        },
        todoDelete(state, action: PayloadAction<number>) {
            const found = state.todos.filter(todo => todo.id === action.payload)[0];


            if (found) {
                const index = state.todos.indexOf(found);
                if (index !== -1) {
                    state.todos.splice(index, 1);
                }

            }
        }
    }
})

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { todoAdd, todoToggle, todoDelete } = todosSlice.actions

// Export the slice reducer as the default export
export default todosSlice.reducer