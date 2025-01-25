import { createContext, Dispatch } from "react";
import { Theme } from "./values";

export const ThemeContext = createContext<CCL.ThemeScheme>(Theme);

export const ThemeContextDispatch = createContext<Dispatch<Partial<CCL.ThemeScheme>>>(() => { });