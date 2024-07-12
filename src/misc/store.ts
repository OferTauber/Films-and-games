import {
  makeObservable,
  observable,
  action,
  computed,
  runInAction,
} from "mobx";

import { getData as fetchData } from "./mock-api";
import type { Entity } from "./types";
import { getCategories } from "./utils";

export class Store {
  isLoading = true;
  data: Entity[] = [];

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      data: observable,

      categories: computed,

      getData: action,
    });
  }

  get categories(): Record<string, number> {
    return getCategories(this.data);
  }

  private setIsLoading = (flag: boolean): void => {
    runInAction(() => (this.isLoading = flag));
  };

  public getData = async () => {
    this.setIsLoading(true);

    try {
      const { data } = await fetchData();

      this.data = data.results;
    } catch (e) {
      // TODO better interface
      window.alert(e);
    } finally {
      this.setIsLoading(false);
    }
  };
}

export default Store;
