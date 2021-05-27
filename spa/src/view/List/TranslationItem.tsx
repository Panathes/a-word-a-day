import React from "react";
import { Translation } from "./List";

export type Props = Translation;

export const TranslationItem: React.FunctionComponent<Props> = ({word, translatedWord}) => {
  return (
    <div style={{ backgroundColor: "#DCDCDC", borderRadius: "3px" }}>
      <div>{word}</div>
      <div>{translatedWord}</div>
    </div>
  );
};
