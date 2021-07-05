import './Text.scss';
import * as React from 'react';
import cx from 'classnames';
import {useTranslate} from "../../internationalization/hooks/useTranslate";
import {TOptions} from "i18next";

interface ITextProps {
    label?: string;
    className?: string | Array<string>;
    params?: TOptions<{ [key: string]: any }> | string;
    preventInterpolation?: boolean;
}

export const Text: React.FC<ITextProps> = ({
                                               className,
                                               children,
                                               label,
                                               params,
                                               preventInterpolation = false,
                                           }) => {
    const t = useTranslate();

    const defineContent = () => {
        if (children) {
            if (typeof children === 'string' && !preventInterpolation) {
                return t(children, params);
            }
            return children;
        }
        if (label && !preventInterpolation) {
            return t(label, params);
        }
        return label;
    };

    const content = defineContent();

    return (
        <span className={cx(className, 'text')}>
            {content}
        </span>
    );
};