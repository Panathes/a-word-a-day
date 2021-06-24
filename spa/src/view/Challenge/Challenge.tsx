import React, { useState } from "react";
import { Header } from "../Header/Header";
import { TimeframeSelection } from "../Filter/TimeframeSelection"
import { DateTime, Duration } from "luxon";
import { Translation } from "../../Domain/Translation"
import { deserializableTranslation, serializableTranslation } from '../../storage/serializeTranslation';
import { LocalStorageDriver } from "../../utils/localStorageDriver";
import M from "minimatch";
import { QuizCard } from "./QuizCard";
import { findRandomTranslation } from "../../utils/translation";

export interface Props {}

export interface QuizItem {
  visible: string,
  hidden: string
}

const localStorageDriver = new LocalStorageDriver("wordsTranslated", serializableTranslation, deserializableTranslation)


const words: Translation[] = localStorageDriver.getItems()

export const Challenge: React.FunctionComponent<Props> = () => {
  const [timeFrame, setTimeFrame] = useState(Duration.fromObject({days: 1}))

  function filterTranslationsByDate({createdAt}: Translation): boolean {
    const today = DateTime.local()
    return createdAt >= today.minus(timeFrame)
  }
  const filteredTranslations: Array<Translation> = words.filter(filterTranslationsByDate)

  function buildQuizItem(translation: Translation): QuizItem {
    if (Math.random() > 0.5) {
      return {
        visible: translation.translatedWord,
        hidden: translation.word
      }
    }
    return {
      visible: translation.word,
      hidden: translation.translatedWord
    }
  }
  const quizItem = buildQuizItem(findRandomTranslation(filteredTranslations))

  return (
    <div className="container">
      <Header />
      <TimeframeSelection setTimeFrame={setTimeFrame} />
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <QuizCard quizItem={quizItem} />
        </div>
      </div>
    </div>
  );
};
