import './Note.scss';
import * as React from "react";
import cx from 'classnames';
import {ACTION_BUTTON_TYPE, NoteActionButton} from "./NoteActionButton/NoteActionButton";
import {NotePagination} from "./NotePagination/NotePagination";
import {Text} from "../../common.components/Text/Text";

interface INoteProps {
    noteId: string;
    position: number;
    title: string;
    description: string

    mix?: string;

    onRemove?(noteId: string): void;

    onPositionChange?(noteId: string, isIncrement: boolean): void;

    onEdit?(noteId: string): void;
}

export const Note: React.VFC<INoteProps> = React.memo(
    ({
         position,
         title,
         description,
         noteId,
         mix,
         onEdit,
         onPositionChange,
         onRemove
     }) => {

        const editClickHandler = () => {
            onEdit && onEdit(noteId);
        };

        const removeClickHandler = () => {
            onRemove && onRemove(noteId);
        };

        const paginationClickHandler = (isUpButton: boolean) => {
            onPositionChange && onPositionChange(noteId, !isUpButton);
        }


        return (
            <div className={cx("note", mix)}>
                <div className="note__index">
                    {position}
                </div>
                <div className="note__body">
                    <div className="note__title">
                        <Text label={title}/>
                    </div>
                    <div className="note__delimiter"/>
                    <div className="note__description">
                        <Text label={description}/>
                    </div>
                    <div className="note__buttons">
                        <NoteActionButton mix="note__action-button_margin_right" type={ACTION_BUTTON_TYPE.DELETE}
                                          onClick={removeClickHandler}/>
                        <NoteActionButton mix="note__action-button_margin_right" type={ACTION_BUTTON_TYPE.EDIT}
                                          onClick={editClickHandler}/>
                        <NotePagination onClick={paginationClickHandler}/>
                    </div>
                </div>
            </div>
        );
    });

Note.displayName = "Note";