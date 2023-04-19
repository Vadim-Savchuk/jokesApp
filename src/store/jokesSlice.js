import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    jokes: [],
    selected: [],
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

            const data = await response.json();
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

export const addSelected = createAsyncThunk(
    'jokes/addSelected',
    async function (id, { rejectWithValue, dispatch, getState }) {
        const joke = getState().jokes.jokes.find(joke => joke.id === id);

        try {
            const response = await fetch(`https://643a5391bd3623f1b9b10265.mockapi.io/jokes/v1/Jokes/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ isSelected: !joke.isSelected })
            });

            if (!response.ok) {
                throw new Error('Can`t add selected joke. Server Error');
            }

            dispatch(toogleSelected({ id }))
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const liked = createAsyncThunk(
    'jokes/liked',
    async function (id, { rejectWithValue, dispatch, getState }) {
        let whoLiked = getState().jokes.jokes.find(joke => joke.id === id).whoLiked;
        let likes    = getState().jokes.jokes.find(joke => joke.id === id).likes;
        const author = getState().jokes.author;

        const authorIndex = whoLiked.indexOf(author);

        if (authorIndex > -1) {
            const copy = Object.assign([], whoLiked);
                  copy.splice(authorIndex, 1);

            whoLiked = copy
            likes--;
        } else {
            whoLiked = [...whoLiked, author]
            likes++;
        }

        try {
            const response = await fetch(`https://643a5391bd3623f1b9b10265.mockapi.io/jokes/v1/Jokes/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    likes,
                    whoLiked,
                })
            });

            if (!response.ok) {
                throw new Error('Can`t add selected joke. Server Error');
            }
            const date = await response.json();
            dispatch(toggleLiked(date))
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
        toogleSelected: (state, action) => {
            const toggledJoke = state.jokes.find(joke => joke.id === action.payload.id);
                  toggledJoke.isSelected = !toggledJoke.isSelected;
        },
        toggleLiked: (state, action) => {
            const toggledJoke = state.jokes.find(joke => joke.id === action.payload.id);
                  toggledJoke.likes = action.payload.likes;
                  toggledJoke.whoLiked = action.payload.whoLiked;
        }
    },
    extraReducers: {
        [fetchJokes.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchJokes.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.jokes = action.payload;
        },
        [fetchJokes.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [addNewJoke.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [addSelected.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [liked.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    }
})

export const { addJoke, addAuthor, toogleSelected, toggleLiked } = jokesSlice.actions;
export default jokesSlice.reducer;