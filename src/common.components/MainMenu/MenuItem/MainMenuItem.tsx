import './MainMenuItem.scss';
import * as React from "react";
import {NavLink} from "react-router-dom";
import {IMenuItem} from "../../types/menu";

export interface IMainMenuItemProps extends IMenuItem {}

export const MainMenuItem = React.memo<IMainMenuItemProps>(({link, title, onClick, exact}) => {
    if (link) {
        return (
            <NavLink to={link} exact={exact} onClick={onClick} className="main-menu-item" activeClassName="main-menu-item_selected">
                {title}
            </NavLink>
        );
    }
    return (
        <div onClick={onClick} className="main-menu-item">
            {title}
        </div>
    )
});
