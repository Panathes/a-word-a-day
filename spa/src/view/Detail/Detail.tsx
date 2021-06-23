import React, { useState} from 'react';
import { DateTime } from "luxon";
// import { Translation } from "../List/List";
import { Translation } from "../../Domain/Interface/Translation";
import { v4 as uuid } from "uuid";
import { getTranslatedItem, setItemInLocalStorage } from "../../Domain/Localstorage/localStorageMethod";



export interface Props {}


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
        const translatedWordsItem = getTranslatedItem()
        translatedWordsItem.push(translation)
        setItemInLocalStorage(translatedWordsItem, "wordsTranslated")
    }
 
    return (
        <React.Fragment>
            <div>
                <label>Anglais</label>
                <input className="input is-small" type="text" placeholder={addWord} onChange={(e) => setWord(e.target.value)}></input>
                <label>Français</label>
                <input className="input is-small" type="text" placeholder={addTranslatedWord} onChange={(e) => setTranslatedWord(e.target.value)}></input>
                <button type="submit"
                    className="button is-success is-rounded"
                    style={{ float: "right", marginTop: "200px" }}
                    onClick={addWordInStorage}
                    >
                    Ajouter
                </button>
            </div>
            
        </React.Fragment>
    )
}