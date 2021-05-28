import React, { useState } from "react";
import { TranslationItem } from "./TranslationItem";
import { Header } from "../Header/Header";
import { TimeframeSelection } from "../Filter/TimeframeSelection"
import { v4 as uuid } from "uuid";
import { DateTime, Duration, Interval } from "luxon";

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
    createdAt: DateTime.fromObject({ year: 2021, month: 5, day: 28 }),
  },
  {
    id: uuid(),
    word: "back pack",
    translatedWord: "sac à dos",
    createdAt: DateTime.fromObject({ year: 2020, month: 5, day: 29 }),
  },
  {
    id: uuid(),
    word: "computer",
    translatedWord: "ordinateur",
    createdAt: DateTime.fromObject({ year: 2021, month: 5, day: 15 }),
  },
  {
    id: uuid(),
    word: "vert",
    translatedWord: "green",
    createdAt: DateTime.fromObject({ year: 2021, month: 5, day: 24 }),
  },
  {
    id: uuid(),
    word: "hope",
    translatedWord: "espoir",
    createdAt: DateTime.fromObject({ year: 2021, month: 4, day: 29 }),
  },
  {
    id: uuid(),
    word: "bullet",
    translatedWord: "balle",
    createdAt: DateTime.fromObject({ year: 2021, month: 1, day: 27 }),
  },
];


export const Dictionary: React.FunctionComponent<Props> = () => {
  const [timeFrame, setTimeFrame] = useState(Duration.fromObject({days: 1}))
  function filterTranslationsByDate({createdAt}: Translation): boolean {
    const today = DateTime.local()
    return createdAt >= today.minus(timeFrame)

    const interval = Interval.before(today, timeFrame)
    return interval.contains(createdAt)
  }
  return (
    <div className="container">
      <Header />
      <TimeframeSelection setTimeFrame={setTimeFrame} />
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          {words.filter(filterTranslationsByDate).map((word) => (
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
