import { CCLProvider } from "./ccl"
import { GlobalStateProvider, useGlobalState, useSetGlobalState, withGlobalState, IGLobalStateRef } from './globalState';
import { ModalProvider, useSetModal, withModal } from './modal';
import { ThemeProvider, useTheme, useSetTheme, withTheme } from './theme';

export type { IGLobalStateRef }

export {
    CCLProvider,
    GlobalStateProvider, useGlobalState, useSetGlobalState, withGlobalState,
    ModalProvider, useSetModal, withModal,
    ThemeProvider, useTheme, useSetTheme, withTheme,
}