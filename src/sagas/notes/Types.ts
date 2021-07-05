import {INote} from "../../store/notes/Types";
import {ActionCustomType} from "../../store/utils";

export enum NOTE_SAGA_ACTION {
    ADD_NOTE_REQUEST = "NOTE/ADD_NOTE_REQUEST",
    REMOVE_NOTE_REQUEST = "NOTE/REMOVE_NOTE_REQUEST",
    CHANGE_POSITION_REQUEST = "NOTE/CHANGE_POSITION_REQUEST",
    GET_NOTES_REQUEST = "NOTE/GET_NOTES_REQUEST",
    SET_NOTE_REQUEST = "NOTE/SET_NOTES_REQUEST",
}

export type GetNotesRequestAction = ActionCustomType<NOTE_SAGA_ACTION.GET_NOTES_REQUEST>;
export type AddNoteRequestAction = ActionCustomType<NOTE_SAGA_ACTION.ADD_NOTE_REQUEST, INote>;
export type SetNoteRequestAction = ActionCustomType<NOTE_SAGA_ACTION.SET_NOTE_REQUEST, INote>;
export type RemoveNoteRequestAction = ActionCustomType<NOTE_SAGA_ACTION.REMOVE_NOTE_REQUEST, string>;
export type ChangePositionRequestAction = ActionCustomType<NOTE_SAGA_ACTION.CHANGE_POSITION_REQUEST, {
        noteId: string,
        isIncrement: boolean,
    }>;