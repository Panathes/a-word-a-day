import React from "react";
import { Translation } from "../../../Domain/Translation";
import { findRandomTranslation } from "../../../utils/translation";
import { QuizCard } from "../QuizCard";

export interface QuizItem {
  visible: string;
  hidden: string;
}

export interface Props {
  translations: Translation[];
}

export const RandomSelection: React.FunctionComponent<Props> = ({
  translations,
}) => {
  const [quizItem, setQuizItem] = React.useState(shuffleQuizItem());

  function buildQuizItem(translation: Translation): QuizItem {
    if (Math.random() > 0.5) {
      return {
        visible: translation.translatedWord,
        hidden: translation.word,
      };
    }
    return {
      visible: translation.word,
      hidden: translation.translatedWord,
    };
  }

  function shuffleQuizItem(): QuizItem {
    return buildQuizItem(findRandomTranslation(translations));
  }

  function onClick(): void {
    setQuizItem(shuffleQuizItem());
  }
  return (
    <div className="columns">
      <div className="column is-half is-offset-one-quarter">
        <QuizCard quizItem={quizItem} key={quizItem.hidden} />
      </div>
      <button onClick={onClick}>shuffle</button>
    </div>
  );
};
