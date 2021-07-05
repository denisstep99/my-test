import './SideMenu.scss';
import * as React from "react";
import cx from 'classnames';
import {IMainMenuItemProps} from "../MainMenu/MenuItem/MainMenuItem";

interface ISideMenuProps {
    className?: string;
    children?: React.ReactElement<IMainMenuItemProps> | Array<React.ReactElement<IMainMenuItemProps>>; //todo sidemenuitems
}

export const SideMenu = React.memo<ISideMenuProps>(({children, className}) => {
    return (
        <div className={cx('side-menu', className)}>
            {children}
        </div>
    );
});