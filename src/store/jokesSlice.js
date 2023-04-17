import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    jokes: [],
    author: null,
    status: null,
    error: null,
}

export const fetchJokes = createAsyncThunk(
    'jokes/fetchJokes',
    async function (_, { rejectWithValue }) {
        try {
            const response = await fetch(`https://643a5391bd3623f1b9b10265.mockapi.io/Jokes`)

            if (!response.ok) {
                throw new Error('Server Error');
            }

            const  data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addNewJoke = createAsyncThunk(
    'jokes/addJoke',
    async function (joke, { rejectWithValue, dispatch }) {
        try {
            const newJoke = {
                answer: joke.answer,
                question: joke.question,
                author: joke.author,
                likes: joke.likes,
            }

            const response = await fetch('https://643a5391bd3623f1b9b10265.mockapi.io/jokes/v1/Jokes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newJoke)
            });

            if (!response.ok) {
                throw new Error('Can`t add joke. Server Error');
            }

            const date = await response.json();
            dispatch(addJoke(date))
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const jokesSlice = createSlice({
    name: 'jokes',
    initialState,
    reducers: {
        addJoke: (state, action) => {
            state.jokes.push(action.payload);
        },
        addAuthor: (state, action) => {
            state.author = action.payload;
        },
    },
    extraReducers: {
        [fetchJokes.pending]: (state) => {
            state.status = 'loading';
            state.error  = null;
        },
        [fetchJokes.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.jokes  = action.payload;
        },
        [fetchJokes.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error  = action.payload; 
        },
        [addNewJoke.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error  = action.payload;
        },
    }
})

export const { addJoke, addAuthor } = jokesSlice.actions;
export default jokesSlice.reducer;