import { Platform } from "react-native"
import { isMoment } from "moment"

export const isIOS = Platform.OS === "ios"

export const createReducer = <T>(oldState: T, newState: DeepPartial<T>): T => ({ ...oldState, ...newState })

export const isObject = (value: any) => value !== null && typeof value === "object" && !Array.isArray(value) && !(value instanceof Date) && !(isMoment(value))

export const delay = (second: number) => new Promise(resolve => setTimeout(resolve, second * 1000))