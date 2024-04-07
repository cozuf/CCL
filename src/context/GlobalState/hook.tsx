import { Dispatch, useContext } from "react";
import { GlaobalStateContext, GlobalStateDispatchContext } from "./context";


export const useGlobalState = (): CCL.GlobalStateScheme => useContext(GlaobalStateContext);
export const useSetGlobalState = (): Dispatch<Partial<CCL.GlobalStateScheme>> => useContext(GlobalStateDispatchContext);