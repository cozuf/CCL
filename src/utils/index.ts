export const createReducer = <T>(oldState: T, newState: DeepPartial<T>): T => ({ ...oldState, ...newState })