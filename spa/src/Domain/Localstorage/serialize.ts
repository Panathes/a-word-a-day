import { DateTime } from "luxon";
import { Translation } from "../Interface/Translation";

type SerializedTranslation = Translation & {
    createdAt: string,
} 


export const deserializeTranslation = (
  serialyzedTranslation: SerializedTranslation
): Translation => {
    console.log(serialyzedTranslation)
    return { 
        ...serialyzedTranslation,
        createdAt: DateTime.fromISO(serialyzedTranslation.createdAt),
    }
} 

export const serializeTranslation = (translation: Translation): string => {
    return JSON.stringify({
        ...translation,
        createdAt: translation.createdAt.toISO(),
    });
}