import { Dispatch, useContext } from 'react';
import { ThemeContext, ThemeContextDispatch } from './context';

export const useTheme = (): CCL.ThemeScheme => useContext(ThemeContext)
export const useSetTheme = (): Dispatch<Partial<CCL.ThemeScheme>> => useContext(ThemeContextDispatch)