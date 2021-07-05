import {
    AddNoteRequestAction,
    ChangePositionRequestAction,
    GetNotesRequestAction,
    NOTE_SAGA_ACTION,
    RemoveNoteRequestAction,
    SetNoteRequestAction
} from "./Types";
import {createTypedAction} from "../../store/utils";

export const getNotesRequestAction = createTypedAction<GetNotesRequestAction>(NOTE_SAGA_ACTION.GET_NOTES_REQUEST);
export const addNotesRequestAction = createTypedAction<AddNoteRequestAction>(NOTE_SAGA_ACTION.ADD_NOTE_REQUEST);
export const removeNoteRequestAction = createTypedAction<RemoveNoteRequestAction>(NOTE_SAGA_ACTION.REMOVE_NOTE_REQUEST);
export const setNoteRequestAction = createTypedAction<SetNoteRequestAction>(NOTE_SAGA_ACTION.SET_NOTE_REQUEST);
export const changePositionRequestAction = createTypedAction<ChangePositionRequestAction>(NOTE_SAGA_ACTION.CHANGE_POSITION_REQUEST);