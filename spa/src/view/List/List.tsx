import React, { useState } from "react";
import { TranslationItem } from "./TranslationItem";
import { Header } from "../Header/Header";
import { TimeframeSelection } from "../Filter/TimeframeSelection"
import { DateTime, Duration } from "luxon";
import { Translation } from "../../Domain/Translation"
import { Detail } from '../Detail/Detail';
import { deserializableTranslation, serializableTranslation } from '../../storage/serializeTranslation';
import { LocalStorageDriver } from "../../utils/localStorageDriver";

export interface Props {}


const localStorageDriver = new LocalStorageDriver("wordsTranslated", serializableTranslation, deserializableTranslation)


const words: Translation[] = localStorageDriver.getItems()

export const Dictionary: React.FunctionComponent<Props> = () => {
  const [timeFrame, setTimeFrame] = useState(Duration.fromObject({days: 1}))
  function filterTranslationsByDate({createdAt}: Translation): boolean {
    const today = DateTime.local()
    return createdAt >= today.minus(timeFrame)
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
      <div className="modal">
        <div className="modal-background"></div>
        <div className="modal-content">
          <Detail />
        </div>
        <button className="modal-close is-large" aria-label="close"></button>
      </div>
      {/* <button
        className="button is-success is-rounded"
        style={{ float: "right" }}
      >
        Ajouter
      </button> */}
    </div>
  );
};
