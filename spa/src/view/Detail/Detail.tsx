import React, { useState} from 'react';
import { DateTime } from "luxon";
import { Translation } from "../../Domain/Translation";
import { v4 as uuid } from "uuid";
import { deserializableTranslation, serializableTranslation } from '../../storage/serializeTranslation';
import { LocalStorageDriver } from '../../utils/localStorageDriver';



export interface Props {}

const localStorageDriver = new  LocalStorageDriver("wordsTranslated", serializableTranslation, deserializableTranslation)

export const Detail: React.FunctionComponent<Props> = () => {
    const [addWord, setWord] = useState("");
    const [addTranslatedWord, setTranslatedWord] = useState("");

    const addWordInStorage = () => {
        const date = DateTime.local()
        console.log("La date est :", date);
        const translation: Translation = {
            id: uuid(),
            word: addWord,
            translatedWord: addTranslatedWord,
            createdAt: date,
        }
        localStorageDriver.addItem(translation)
    }
 
    return (
        <React.Fragment>
            <div>
                <label>Anglais</label>
                <input data-e2e="english_word" className="input is-small" type="text" placeholder={addWord} onChange={(e) => setWord(e.target.value)}></input>
                <label>Français</label>
                <input data-e2e="french_word" className="input is-small" type="text" placeholder={addTranslatedWord} onChange={(e) => setTranslatedWord(e.target.value)}></input>
                <button type="submit"
                    className="button is-success is-rounded"
                    style={{ float: "right", marginTop: "200px" }}
                    data-e2e="submit_translation"
                    onClick={addWordInStorage}
                    >
                    Ajouter
                </button>
            </div>
            
        </React.Fragment>
    )
}