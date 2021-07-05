import './Button.scss';
import * as React from "react";
import {Text} from "../Text/Text";

interface IButtonProps {
    label: string;

    onClick?(): void;
}

export const Button = React.memo<IButtonProps>(({label, onClick}) => {


    return (
        <button className="button" onClick={onClick}>
            <Text label={label} />
        </button>
    );
});

Button.displayName = 'Button';