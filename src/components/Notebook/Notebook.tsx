import './Notebook.scss';
import * as React from "react";
import {Note} from "../Note/Note";
import {useDispatch, useSelector} from "react-redux";
import {getNotesSorted} from "../../store/notes/Selectors";
import {changePositionRequestAction, removeNoteRequestAction} from "../../sagas/notes/Actions";

interface INotebookProps {
    onEdit?(noteId: string): void;
    editMode?: boolean;
}

export const Notebook:React.VFC<INotebookProps> = ({onEdit}) => {

    const dispatch = useDispatch();
    const notes = useSelector(getNotesSorted);

    const removeNoteHandler = (noteId: string) => {
        dispatch(removeNoteRequestAction(noteId));
    }

    const changeNotePositionHandler = (noteId: string, isIncrement: boolean) => {
        dispatch(changePositionRequestAction({noteId, isIncrement}));
    }


    return (
        <div className="notebook">
            {notes.map((note) => {
                return (
                    <Note
                        {...note}
                        key={note.noteId}
                        mix={"notebook__note"}
                        onEdit={onEdit}
                        onRemove={removeNoteHandler}
                        onPositionChange={changeNotePositionHandler}
                    />
                );
            })}
        </div>
    );
};