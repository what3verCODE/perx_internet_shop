import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "./types";

export const withPrefix = (prefix: string) =>
    (actionName: string) => `${prefix}/${actionName}`;

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector