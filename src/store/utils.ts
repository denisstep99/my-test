import {createAction} from "@reduxjs/toolkit";
import {PayloadActionCreator} from "@reduxjs/toolkit/src/createAction";

export type ActionCustomType<T extends string, P = void> = P extends void ? {
    type: T,
    payload?: P,
} : {
    type: T,
    payload: P,
};

export function createTypedAction<T extends ActionCustomType<string, any>>(type: T['type']): PayloadActionCreator<T['payload'], T['type']> {
    return createAction<T["payload"], T["type"]>(type);
}