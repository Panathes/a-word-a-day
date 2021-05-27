import React from "react";
import { TranslationItem } from "./TranslationItem";
import { Header } from "../Header/Header";
import { v4 as uuid } from "uuid";
import { DateTime } from "luxon";

export interface Props {}

export interface Translation {
  id: string;
  word: string; // Ajout d'une interface pour définir la langue et le mot
  translatedWord: string;
  createdAt: DateTime;
}

const words: Translation[] = [
  {
    id: uuid(),
    word: "egg",
    translatedWord: "oeuf",
    createdAt: DateTime.fromObject({ year: 2021, month: 5, day: 27 }),
  },
  {
    id: uuid(),
    word: "back pack",
    translatedWord: "sac à dos",
    createdAt: DateTime.fromObject({ year: 2021, month: 5, day: 27 }),
  },
  {
    id: uuid(),
    word: "computer",
    translatedWord: "ordinateur",
    createdAt: DateTime.fromObject({ year: 2021, month: 5, day: 27 }),
  },
  {
    id: uuid(),
    word: "vert",
    translatedWord: "green",
    createdAt: DateTime.fromObject({ year: 2021, month: 5, day: 27 }),
  },
  {
    id: uuid(),
    word: "hope",
    translatedWord: "espoir",
    createdAt: DateTime.fromObject({ year: 2021, month: 5, day: 27 }),
  },
  {
    id: uuid(),
    word: "bullet",
    translatedWord: "balle",
    createdAt: DateTime.fromObject({ year: 2021, month: 5, day: 27 }),
  },
];

export const Dictionary: React.FunctionComponent<Props> = () => {
  return (
    <div>
      <Header />
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          {words.map((word) => (
            <div className="mt-2" key={word.id}>
            <TranslationItem  {...word} />
            </div>
          ))}
        </div>
      </div>
      <button
        className="button is-success is-rounded"
        style={{ float: "right" }}
      >
        Ajouter
      </button>
    </div>
  );
};
