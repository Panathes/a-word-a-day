import React from "react";
import { Translation } from "./List";
import { DateTime } from "luxon";

export type Props = Translation;

export const TranslationItem: React.FunctionComponent<Props> = ({word, translatedWord, createdAt}) => {
  return (
    <div style={{ backgroundColor: "#DCDCDC", borderRadius: "3px" }} data-e2e="translation-created-at">
      <div>{word}</div>
      <div>{translatedWord}</div>
      <div>{createdAt.setLocale("fr-FR").toLocaleString()}</div>
    </div>
  );
};
