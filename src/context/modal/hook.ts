import { Dispatch, useContext } from "react";
import { ModalDispatchContext } from "./context";

export const useSetModal = (): Dispatch<Partial<CCL.ModalScheme>> => useContext(ModalDispatchContext)