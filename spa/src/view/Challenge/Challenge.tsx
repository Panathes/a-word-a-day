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
        {(translations) => <RandomSelection translations={translations} />}
      </FilterByTimeFrame>
    </div>
  );
};
