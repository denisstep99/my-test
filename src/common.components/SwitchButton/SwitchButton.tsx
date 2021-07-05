import './SwitchButton.scss';
import * as React from "react";
import cx from 'classnames';
import {v4 as uuid} from "uuid";
import {ChangeEvent, useState} from "react";

export interface ISwitchButtonProps {
    isSwitchedOn: boolean;

    labelOn?: React.ReactNode;
    labelOff?: React.ReactNode;

    className?: string;
    labelFor?: string;
    disabled?: boolean;

    onChange?(isSwitchedOn: boolean): void;
}

export const SwitchButton = React.memo<ISwitchButtonProps>(({
                                                                           labelOn,
                                                                           labelOff,
                                                                           className,
                                                                           labelFor,
                                                                           disabled,
                                                                           onChange,
                                                                           isSwitchedOn,
                                                                       }) => {
    const [switchButtonId] = useState(labelFor || uuid());
    const switchButtonClass = cx(
        'switch-button',
        {'switch-button_disabled': disabled, 'switch-button_on': isSwitchedOn},
        className
    );

    const changeStateHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event.target.checked);
    }

    return (
        <span className={switchButtonClass}>
            <label className="switch-button__body" htmlFor={switchButtonId}>
                <div className="switch-button__body-part switch-button__body-part-off">
                    {labelOff}
                </div>
                <div className="switch-button__body-part switch-button__body-part-on">
                    {labelOn}
                </div>
            </label>
            <input
                className="switch-button__checkbox"
                type="checkbox"
                checked={isSwitchedOn}
                disabled={disabled}
                id={switchButtonId}
                onChange={changeStateHandler}
            />
        </span>
    );
});
