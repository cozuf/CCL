import { createContext, Dispatch } from "react";

export const ModalDispatchContext = createContext<Dispatch<Partial<CCL.ModalScheme>>>(() => { });