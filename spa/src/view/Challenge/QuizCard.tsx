import React, { useState } from "react";
import { QuizItem } from "./Challenge";

export interface Props {
  quizItem: QuizItem
}

export const QuizCard: React.FunctionComponent<Props> = ({quizItem}) => {
  const [visible, setVisibility] = useState(false)

  function reveal(): void {
    setVisibility(true)
  }

  return (
    <div className="container">
      <p>{ quizItem.visible }</p>
      {!visible && (<button onClick={reveal}>display</button>) }
      {visible && (<p>{ quizItem.hidden }</p>) }
    </div>
  );
};
