import React from "react";
import { Header } from "../Header/Header";
import FilterByTimeFrame from "../FilterByTimeFrame";
import RandomSelection from "./RandomSelection";

export interface Props {}

export const Challenge: React.FunctionComponent<Props> = () => {
  return (
    <div className="container">
      <Header />
      <FilterByTimeFrame>
        {(translations) => {
            if (translations.length === 0) {
                return <p>Pas de mots a afficher !</p>
            }
            return <RandomSelection translations={translations} />}
        }
      </FilterByTimeFrame>
    </div>
  );
};
