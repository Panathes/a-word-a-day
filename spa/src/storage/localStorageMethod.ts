import { Translation } from "../Domain/Interface/Translation";
import { DateTime } from "luxon";

export class LocalStorageDriver<T, S> {
  constructor(
    private keyName: string,
    private serialyzeFunction: (t: T) => string,
    private deserializeFunction: (s: S) => T
  ) {}

  getItems(): Array<T> {
    const serialyzedItems: string | null = localStorage.getItem(this.keyName);
    if (serialyzedItems === null) {
      return [];
    }
    return JSON.parse(serialyzedItems).map(this.deserializeFunction);
  }

  setItems(items: Array<T>): void {
    const serialyzedItems = items.map(this.serialyzeFunction);
    localStorage.setItem(this.keyName, JSON.stringify(serialyzedItems));
  }
}
