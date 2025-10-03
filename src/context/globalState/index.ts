import GlobalStateProvider, { IGLobalStateRef } from "./proivder";
import { useGlobalState, useSetGlobalState } from "./hook";
import { withGlobalState } from "./with"

export type { IGLobalStateRef }
export { GlobalStateProvider, useGlobalState, useSetGlobalState, withGlobalState }