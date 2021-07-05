import {createSlice, PayloadAction, CaseReducer} from '@reduxjs/toolkit'
import {INote, INotesState} from "./Types";


const initialState: INotesState = {};

const setNotesAction: CaseReducer<INotesState, PayloadAction<Array<INote>>> = (state, action) => {
    const notes = action.payload;
    notes.forEach(note => state[note.noteId] = note);
}

const changeNotePositionAction: CaseReducer<INotesState, PayloadAction<{
    noteId: string;
    isPositionIncrement: boolean;
}>> = (state, action) => {
    const {noteId, isPositionIncrement} = action.payload;

    const currentNote = state[noteId];
    const currentPosition = currentNote.position;

    if (!currentNote) {
        throw new Error('Incorrect noteId');
    }

    if (isPositionIncrement) {
        const nextNote = Object.values(state).find(note => note.position === currentPosition + 1);
        if (!nextNote) {
            return
        }

        state[nextNote.noteId] = {...nextNote, position: currentPosition};
        state[currentNote.noteId] = {...currentNote, position: currentPosition + 1};
    } else {
        const previousNote = Object.values(state).find(note => note.position === currentPosition - 1);
        if (!previousNote) {
            return;
        }

        state[previousNote.noteId] = {...previousNote, position: currentPosition};
        state[currentNote.noteId] = {...currentNote, position: currentPosition - 1};
    }
}

const removeNoteAction: CaseReducer<INotesState, PayloadAction<string>> = (state, action) => {
    const noteId = action.payload;
    const currentNote = state[noteId];

    Object.values(state).forEach(note => {
        if (note.position > currentNote.position) {
            state[note.noteId].position -= 1;
        }
    });

    delete state[noteId];
}

const addNoteAction: CaseReducer<INotesState, PayloadAction<INote>> = (state, action) => {
    const {noteId, position} = action.payload;

    Object.values(state).forEach(note => {
        if (note.position >= position) {
            state[note.noteId].position += 1;
        }
    });

    state[noteId] = {...action.payload};
}


const noteSlice = createSlice({
    name: 'NOTE',
    initialState,
    reducers: {
        setNotesAction,
        addNoteAction,
        removeNoteAction,
        changeNotePositionAction,
    }
});

export default noteSlice.reducer;
export const noteActions = noteSlice.actions;
