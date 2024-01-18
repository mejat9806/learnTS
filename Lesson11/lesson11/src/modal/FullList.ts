import Listitem from "./ListItem";

interface List {
  list: Listitem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(itemObj: Listitem): void;
  remove(itemToRemove: string): void;
}

export default class FullList implements List {
  static instance: FullList = new FileList();
  private constructor(private _list: Listitem[] = []) {}
  get list(): Listitem[] {
    return this._list;
  }
}
