import { DateTime } from "luxon";
import { Translation } from "../Domain/Translation";

type SerializedTranslation = Omit<Translation, 'createdAt'> & {
    createdAt: string,
} 


export const deserializableTranslation = (
  serialyzedTranslation: SerializedTranslation
): Translation => {
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