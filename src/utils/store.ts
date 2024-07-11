import {
  makeObservable,
  observable,
  action,
  computed,
  runInAction,
} from "mobx";

import { getData as fetchData } from "./mock-api";
import type { Film, EntityType } from "./types";

export class Store {
  isLoading = true;
  data: Film[] = [];

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      data: observable,

      moviesCount: computed,
      gamesCount: computed,
      seriesCount: computed,

      getData: action,
    });
  }

  private setIsLoading = (flag: boolean): void => {
    runInAction(() => (this.isLoading = flag));
  };

  private count = (type: EntityType): number => {
    return this.data.filter((entity) => entity.Type === type).length;
  };

  get moviesCount() {
    return this.count("movie");
  }

  get gamesCount() {
    return this.count("game");
  }
  get seriesCount() {
    return this.count("series");
  }

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
