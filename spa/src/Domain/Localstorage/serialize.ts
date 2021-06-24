import { DateTime } from "luxon";
import { Translation } from "../Interface/Translation";

type SerializedTranslation = Omit<Translation, 'createdAt'> & {
    createdAt: string,
} 


export const deserializableTranslation = (
  serialyzedTranslation: SerializedTranslation
): Translation => {
    console.log(serialyzedTranslation)
    return { 
        ...serialyzedTranslation,
        createdAt: DateTime.fromISO(serialyzedTranslation.createdAt),
    }
} 

export const serializableTranslation = (translation: Translation): SerializedTranslation => {
    return {
        ...translation,
        createdAt: translation.createdAt.toISO(),
    };
}