import GlobalStateProvider, { IGLobalStateRef } from "./provider";
import { useGlobalState, useSetGlobalState } from "./hook";
import { withGlobalState } from "./with"

export type { IGLobalStateRef }
export { GlobalStateProvider, useGlobalState, useSetGlobalState, withGlobalState }