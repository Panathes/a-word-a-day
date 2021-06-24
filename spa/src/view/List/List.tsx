import React from "react";
import { TranslationItem } from "./TranslationItem";
import { Header } from "../Header/Header";
import { Detail } from "../Detail/Detail";
import FilterByTimeFrame from "../FilterByTimeFrame";

export interface Props {}

export const Dictionary: React.FunctionComponent<Props> = () => {
  return (
    <div className="container">
      <Header />
      <FilterByTimeFrame
        render={(translations) => (
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              {translations.map((word) => (
                <div className="mt-2" key={word.id}>
                  <TranslationItem {...word} />
                </div>
              ))}
            </div>
            <div className="modal">
              <div className="modal-background"></div>
              <div className="modal-content">
                <Detail />
              </div>
              <button
                className="modal-close is-large"
                aria-label="close"
              ></button>
            </div>
          </div>
        )}
      />
    </div>
  );
};
