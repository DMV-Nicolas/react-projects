import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "./constants"

export interface TranslateState {
    fromLanguage: FromLanguage
    toLanguage: ToLanguage
    fromText: string
    toText: string
    loading: boolean
}

export type TranslateAction =
    { type: "INTERCHANGE_LANGUAGES" } |
    { type: "SET_FROM_LANGUAGE", payload: FromLanguage } |
    { type: "SET_TO_LANGUAGE", payload: ToLanguage } |
    { type: "SET_FROM_TEXT", payload: string } |
    { type: "SET_TO_TEXT", payload: string }

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage
export type ToLanguage = Language

export enum SectionType {
    From = 'from',
    To = 'to'
}