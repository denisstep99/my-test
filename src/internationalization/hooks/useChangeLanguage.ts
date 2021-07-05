import {useTranslation} from "react-i18next";
import {LANGUAGE} from "../types";
import {TFunction} from 'i18next';

type Callback = (error: any, t: TFunction) => void;

export function useChangeLanguage() {
    const {i18n} = useTranslation();

    return (language: LANGUAGE, callbackFn?: Callback) => {
        i18n.changeLanguage(language, callbackFn)
    };
}