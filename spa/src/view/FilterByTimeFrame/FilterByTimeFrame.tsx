import { DateTime, Duration } from "luxon";
import React from "react";
import { Translation } from "../../Domain/Translation";
import {
  serializableTranslation,
  deserializableTranslation,
} from "../../storage/serializeTranslation";
import { LocalStorageDriver } from "../../utils/localStorageDriver";
import TimeframeSelection from "../Filter";

const localStorageDriver = new LocalStorageDriver(
  "wordsTranslated",
  serializableTranslation,
  deserializableTranslation
);

export interface Props {
  children(translations: Translation[]): React.ReactElement;
}

export const FilterByTimeFrame: React.FunctionComponent<Props> = ({
  children,
}) => {
  const [timeFrame, setTimeFrame] = React.useState(
    Duration.fromObject({ days: 1 })
  );

  function filterTranslationsByDate({ createdAt }: Translation): boolean {
    const today = DateTime.local();
    return createdAt >= today.minus(timeFrame);
  }

  const translations: Translation[] = localStorageDriver.getItems();
  const translationsSubset = translations.filter(filterTranslationsByDate);

  return (
    <div>
      <TimeframeSelection setTimeFrame={setTimeFrame} />
      {children(translationsSubset)}
    </div>
  );
};
