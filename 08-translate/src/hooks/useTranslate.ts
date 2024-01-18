import { AUTO_LANGUAGE } from "../constants"
import { TranslateState, TranslateAction, FromLanguage, ToLanguage } from "../types"
import { useReducer } from "react"

const initialState: TranslateState = {
    fromLanguage: AUTO_LANGUAGE,
    toLanguage: "en",
    fromText: "",
    toText: "",
    loading: false
}

function reducer(state: TranslateState, action: TranslateAction) {
    const { type } = action

    if (type === "INTERCHANGE_LANGUAGES") {
        if (state.fromLanguage === AUTO_LANGUAGE) return state
        return {
            ...state,
            fromLanguage: state.toLanguage,
            toLanguage: state.fromLanguage
        }
    }

    if (type === "SET_FROM_LANGUAGE") {
        return {
            ...state,
            fromLanguage: action.payload
        }
    }

    if (type === "SET_TO_LANGUAGE") {
        return {
            ...state,
            toLanguage: action.payload
        }
    }

    if (type === "SET_FROM_TEXT") {
        return {
            ...state,
            fromText: action.payload,
            loading: true
        }
    }

    if (type === "SET_TO_TEXT") {
        return {
            ...state,
            toText: action.payload,
            loading: false
        }
    }

    return state
}

export function useTranslate() {
    const [state, dispatch] = useReducer(reducer, initialState)

    const interchangeLanguages = () => {
        dispatch({ type: "INTERCHANGE_LANGUAGES" })
    }

    const setFromLanguage = (language: FromLanguage) => {
        dispatch({ type: "SET_FROM_LANGUAGE", payload: language })
    }

    const setToLanguage = (language: ToLanguage) => {
        dispatch({ type: "SET_TO_LANGUAGE", payload: language })
    }

    const setFromText = (text: string) => {
        dispatch({ type: "SET_FROM_TEXT", payload: text })
    }

    const setToText = (text: string) => {
        dispatch({ type: "SET_TO_TEXT", payload: text })
    }

    return {
        ...state,
        interchangeLanguages,
        setFromLanguage,
        setToLanguage,
        setFromText,
        setToText
    }
}