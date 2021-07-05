import './InputField.scss';
import * as React from "react";
import {ChangeEvent, ChangeEventHandler} from "react";

const MIN_POSITION = 1;

export enum INPUT_TYPE {
    TEXT = 'text',
    NUMBER = 'number',
}

interface IInputFieldProps {
    value: string | number;
    type: INPUT_TYPE,

    placeholder?: string;
    max?: number;
    disabled?: boolean;

    onChange?(value: string): void;
}

export const InputField: React.VFC<IInputFieldProps> = React.memo(({placeholder, onChange, type, value, max, disabled}) => {

    const changeValueHandler: ChangeEventHandler =
        (event: ChangeEvent<HTMLInputElement>) => onChange && onChange(event.currentTarget.value || "");


    return (
        <input
            value={value}
            type={type}
            min={MIN_POSITION}
            max={max}
            disabled={disabled}
            className="input-field"
            placeholder={placeholder}
            onChange={changeValueHandler}
        />
    );
});

InputField.displayName = 'InputField';