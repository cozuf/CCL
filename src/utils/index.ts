export const createReducer = <T>(oldState: T, newState: DeepPartial<T>): T => ({ ...oldState, ...newState })

export const isObject = (value: any) => value !== null && typeof value === "object" && !Array.isArray(value)