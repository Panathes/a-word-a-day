import React, { useState } from "react";
import { QuizItem } from "./RandomSelection/RandomSelection";

export interface Props {
  quizItem: QuizItem;
}

export const QuizCard: React.FunctionComponent<Props> = ({ quizItem }) => {
  const [visible, setVisibility] = useState(false);

  function reveal(): void {
    setVisibility(true);
  }

  return (
    <div className="container">
      <p>{quizItem.visible}</p>
      {!visible && <button data-e2e="hidden-button" onClick={reveal}>display</button>}
      {visible && <p>{quizItem.hidden}</p>}
    </div>
  );
};
