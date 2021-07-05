import {useTranslation} from "react-i18next";
import {LANGUAGE} from "../types";

export function useLanguage(): LANGUAGE {
    const {i18n} = useTranslation();

    return i18n.language as LANGUAGE;
}