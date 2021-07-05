import './NotePagination.scss';
import Arrow from './images/Arrow.svg';

import * as React from "react";

interface INotePaginationProps {
    onClick(isUpButton: boolean): void;
}

export const NotePagination: React.VFC<INotePaginationProps> = React.memo(({onClick}) => {

    const topButtonClickHandler = () => onClick(true);
    const bottomButtonClickHandler = () => onClick(false);


    return (
        <div className="note__pagination">
            <button className="note__pagination-button note__pagination-button_direction_top" onClick={topButtonClickHandler}>
                <Arrow className="note__pagination-icon_direction_top"/>
            </button>
            <button className="note__pagination-button note__pagination-button_direction_bottom" onClick={bottomButtonClickHandler}>
                <Arrow className="note__pagination-icon_direction_bottom"/>
            </button>
        </div>
    );
});

NotePagination.displayName = 'NotePagination';