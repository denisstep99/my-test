import './SideMenuGroup.scss';
import * as React from "react";
import cx from 'classnames';
import {ISideMenuItemProps} from "../SideMenuItem/SideMenuItem";

interface ISideMenuGroupProps {
    className?: string;
    children?: React.ReactElement<ISideMenuItemProps> | Array<React.ReactElement<ISideMenuItemProps>>; //todo sidemenuitems
}

export const SideMenuGroup = React.memo<ISideMenuGroupProps> (({children, className}) => {
    return (
        <div className={cx('side-menu__group', className)}>
            {children}
        </div>
    );
});