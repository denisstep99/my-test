import './MainMenu.scss';
import * as React from "react";
import cx from 'classnames';
import {Link} from "react-router-dom";
import {IMainMenuItemProps} from "./MenuItem/MainMenuItem";

//todo User тип вынести

export interface IUser {
    username: string;
    userRole: string; // todo enum
}

interface IMainMenuProps {
    /**
     * Скрывает блок панели с именем и ролью пользователя, а также кнопку выхода из системы
     */
    userPanelHidden?: boolean;
    /**
     * Определяет информацию о пользователе, которая отображается слева
     */
    user?: IUser;
    className?: string;
    /**
     * Ссылка на страницу выхода из системы
     */
    logoutLink?: string;
    /**
     * Элементы меню представленные компонентами
     */
    children?: React.ReactElement<IMainMenuItemProps> | Array<React.ReactElement<IMainMenuItemProps>>;
    /**
     * Событие клика по ссылке выхода из системы
     */
    onLogout?(): void;
}

export const MainMenu: React.FC<IMainMenuProps> = React.memo(({children, logoutLink, user, userPanelHidden, className, onLogout}) => {
    return (
        <div className={cx("main-menu", className)}>
            <nav className="main-menu__navigation">
                {children}
            </nav>
            {
                !userPanelHidden && user && <div className="main-menu__user-block">
                    <span className="main-menu__user-info">{user.username} ({user.userRole})</span>
                    {
                        logoutLink && <Link onClick={onLogout} className={"main-menu__logout-link"} to={logoutLink}>
                            Выйти
                        </Link>
                    }
                    {
                        !logoutLink && <span onClick={onLogout} className={"main-menu__logout-link"}>
                            Выйти
                        </span>
                    }
                </div>
            }
        </div>
    );
});
