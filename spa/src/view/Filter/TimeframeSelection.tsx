import React, { useState } from 'react'
import { Duration } from "luxon";

export interface Props{
  setTimeFrame: (time: Duration) => void
}

interface TimeFrame {
  label: string;
  duration: Duration;
}

const durations: TimeFrame[] = [
  {
    label: '1 day',
    duration: Duration.fromObject({days: 1})
  },
  {
    label: '1 week',
    duration: Duration.fromObject({weeks: 1})
  },
  {
    label: '3 weeks',
    duration: Duration.fromObject({weeks: 3})
  },
  {
    label: '1 month',
    duration: Duration.fromObject({month: 1})
  },
  {
    label: '1 year',
    duration: Duration.fromObject({year: 1})
  }
]

export const TimeframeSelection: React.FunctionComponent<Props> = ({setTimeFrame}) => {
        const [index, setIndex] = useState(0)
        function incrementIndex() {
          const updatedIndex = Math.min(index + 1, durations.length - 1)
          setIndex(updatedIndex)
          setTimeFrame(durations[updatedIndex].duration)
        }
        function decrementIndex() {
          const updatedIndex = Math.max(index - 1, 0)
          setIndex(updatedIndex)
          setTimeFrame(durations[updatedIndex].duration)
        }
        return (
          <div style={{ display: "flex",  justifyContent: "space-around"}}>
            <button className="button is-light" onClick={decrementIndex} disabled={ index === 0}>
              <span className="icon is-small">
                <i className="fas fa-arrow-left"></i>
              </span>
            </button>
            <p>{ durations[index].label }</p>
            <button className="button is-light" onClick={incrementIndex} disabled={index === durations.length -1}>
              <span className="icon is-small">
                <i className="fas fa-arrow-right"></i>
              </span>
            </button>
          </div>
        );   
  };