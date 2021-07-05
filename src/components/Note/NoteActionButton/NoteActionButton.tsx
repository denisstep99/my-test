import './NoteActionButton.scss';
import cx from 'classnames';
import PenSVG from './images/Pen.svg';
import DeleteSVG from './images/Delete.svg';

import * as React from "react";

export enum ACTION_BUTTON_TYPE {
    DELETE,
    EDIT,
}

interface INoteActionButtonProps {
    type: ACTION_BUTTON_TYPE;
    onClick(): void;

    mix?: string;
}

export const NoteActionButton: React.VFC<INoteActionButtonProps> = React.memo(({type, onClick, mix}) => {

    const IconSVG = type === ACTION_BUTTON_TYPE.DELETE ? DeleteSVG : PenSVG;


    return (
        <button className={cx("note__action-button", mix)} onClick={onClick}>
            <IconSVG />
        </button>
    );
});

NoteActionButton.displayName = 'NoteActionButton';