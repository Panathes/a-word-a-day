export class LocalStorageDriver<T, S> {
  constructor(
    private keyName: string,
    private serialyzeFunction: (t: T) => S,
    private deserializeFunction: (s: S) => T
  ) {}

  private getItemsInStorage(): Array<S> {
    const serialyzedItems: string | null = localStorage.getItem(this.keyName);
    if (serialyzedItems === null) {
      return [];
    }
    return JSON.parse(serialyzedItems);
  }

  private setItemsInStorage(items: Array<S>): void {
    localStorage.setItem(this.keyName, JSON.stringify(items));
  }

  getItems(): Array<T> {
    return this.getItemsInStorage().map(this.deserializeFunction);
  }

  setItems(items: Array<T>): void {
    this.setItemsInStorage(items.map(this.serialyzeFunction));
  }

  addItem(item: T): void {
    const items = this.getItemsInStorage()
    items.push(this.serialyzeFunction(item))
    this.setItemsInStorage(items)
  }
}
