export interface INote {
    position: number;
    noteId: string;
    title: string;
    description: string;
}

export interface INotesState {
    readonly [key: string]: INote;
}