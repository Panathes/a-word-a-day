import { Translation } from "../Interface/Translation"
import { DateTime } from "luxon";

type SerialyzedTranslation = Translation & {
    createdAt: string
}

const deserializeTranslation = (serialyzedTranslation: SerialyzedTranslation): Translation => ({...serialyzedTranslation, createdAt: DateTime.fromISO(serialyzedTranslation.createdAt)})

export const getTranslatedItem = (): Array<Translation> => {
    const wordsTranletedItem = localStorage.getItem("wordsTranslated")
    if (wordsTranletedItem) {
        return JSON.parse(wordsTranletedItem).map(deserializeTranslation)
    } 
    return []
}

export const setItemInLocalStorage = (item: object, key: string) => {
    localStorage.setItem(key, JSON.stringify(item))   
}