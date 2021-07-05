import {createSelector} from '@reduxjs/toolkit';
import {IRootStore} from "../index";
import {INote} from "./Types";

const getNotes = (store: IRootStore) => store.notes;

export const getNotesSorted = createSelector(getNotes, (notes): Array<INote> => {
   return Object
       .values(notes)
       .sort((firstNote, secondNote) => firstNote.position - secondNote.position);
});

export const getNoteByPosition = (position: number) => createSelector(getNotes, (notes): INote | null => {
   return Object
       .values(notes)
       .find(note => note.position === position) || null;
});

export const getNoteById = (noteId: string) => createSelector(getNotes, (notes): INote | null => {
   return notes[noteId] || null;
});

export const getMaxPosition = createSelector(getNotes, (notes): number => {
   return Object
       .values(notes)
       .reduce((maxPosition, currentNote) => Math.max(maxPosition, currentNote.position), 0);
});