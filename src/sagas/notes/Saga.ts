import {call, put, takeLatest, takeEvery, StrictEffect, select} from 'redux-saga/effects';
import {SagaIterator} from 'redux-saga';
import {
    createNote,
    getNotes,
    IResponse,
    removeNote as apiRemoveNote,
    STATUS_CODE,
    updateNotes
} from "../../serverEmulator/api";
import {INote} from "../../store/notes/Types";
import {noteActions} from "../../store/notes/Slice";
import {
    AddNoteRequestAction,
    ChangePositionRequestAction,
    NOTE_SAGA_ACTION,
    RemoveNoteRequestAction,
    SetNoteRequestAction
} from "./Types";
import {getNoteById, getNoteByPosition} from "../../store/notes/Selectors";

const {setNotesAction, addNoteAction, changeNotePositionAction, removeNoteAction} = noteActions;

function* requestNotes(): Generator<StrictEffect, void, IResponse<Array<INote>>> {
    const response: IResponse<Array<INote>> = yield call(getNotes);
    const notes: Array<INote> = response.payload || [];

    yield put(setNotesAction(notes));
}

function* removeNote(action: RemoveNoteRequestAction): SagaIterator {
    const noteId = action.payload;

    const response: IResponse = yield call(apiRemoveNote, noteId);
    if (response.status === STATUS_CODE.GOOD) {
        yield put(removeNoteAction(noteId));
    }
}

function* addNote(action: AddNoteRequestAction): SagaIterator {
    const newNote: INote = action.payload;

    const response: IResponse<INote> = yield call(createNote, newNote);
    const note = response.payload;

    if (note) {
        yield put(addNoteAction(note));
    }
}

function* changePosition(action: ChangePositionRequestAction): SagaIterator {
    const {noteId, isIncrement} = action.payload;

    let currentNote: INote = yield select(getNoteById(noteId));
    let anotherNote: INote | null;

    if (isIncrement) {
        anotherNote = yield select(getNoteByPosition(currentNote.position + 1));

        if (anotherNote) {
            anotherNote = {...anotherNote, position: anotherNote.position - 1};
            currentNote = {...currentNote, position: currentNote.position + 1};

            const response: IResponse = yield call(updateNotes, [anotherNote, currentNote]);
            if (response.status === STATUS_CODE.GOOD) {
                yield put(changeNotePositionAction({noteId, isPositionIncrement: isIncrement}));
            }
        }
        return;
    }

    anotherNote = yield select(getNoteByPosition(currentNote.position - 1));

    if (anotherNote) {
        anotherNote = {...anotherNote, position: anotherNote.position + 1};
        currentNote = {...currentNote, position: currentNote.position - 1};

        const response: IResponse = yield call(updateNotes, [anotherNote, currentNote]);
        if (response.status === STATUS_CODE.GOOD) {
            yield put(changeNotePositionAction({noteId, isPositionIncrement: isIncrement}));
        }
    }
}

function* setNote(action: SetNoteRequestAction): SagaIterator {
    const updatedNote  = action.payload;

    const response: IResponse = yield call(updateNotes, [updatedNote]);
    if (response.status === STATUS_CODE.GOOD) {
        yield put(setNotesAction([updatedNote]));
    }
}


export default function* sagas (): SagaIterator {
    yield takeLatest(NOTE_SAGA_ACTION.GET_NOTES_REQUEST, requestNotes);
    yield takeEvery(NOTE_SAGA_ACTION.ADD_NOTE_REQUEST, addNote);
    yield takeLatest(NOTE_SAGA_ACTION.REMOVE_NOTE_REQUEST, removeNote);
    yield takeEvery(NOTE_SAGA_ACTION.CHANGE_POSITION_REQUEST, changePosition);
    yield takeLatest(NOTE_SAGA_ACTION.SET_NOTE_REQUEST, setNote);
}