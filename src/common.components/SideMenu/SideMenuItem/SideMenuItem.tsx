import './SideMenuItem.scss';
import * as React from "react";
import cx from 'classnames';
import {IMenuItem} from "../../types/menu";
import {NavLink} from "react-router-dom";

export interface ISideMenuItemProps extends IMenuItem {
    className?: string;
}

export const SideMenuItem: React.VFC<ISideMenuItemProps> = React.memo(({className, onClick, link, title, exact}) => {
    if (link) {
        return (
            <NavLink
                to={link}
                exact={exact}
                onClick={onClick}
                className={cx("side-menu__item", className)}
                activeClassName="side-menu__item_selected"
            >
                {title}
            </NavLink>
        );
    }
    return (
        <div onClick={onClick} className={cx("side-menu__item", className)}>
            {title}
        </div>
    )
});