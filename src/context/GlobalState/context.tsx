import { createContext, Dispatch } from "react";
import DEFAULT_GLOBAL_STATE from "./values";

export const GlaobalStateContext = createContext<CCL.GlobalStateScheme>(DEFAULT_GLOBAL_STATE);

export const GlobalStateDispatchContext = createContext<Dispatch<Partial<CCL.GlobalStateScheme>>>(() => { });