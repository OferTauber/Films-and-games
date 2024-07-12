import {
  makeObservable,
  observable,
  action,
  computed,
  runInAction,
} from "mobx";

import { getData as fetchData } from "./mock-api";
import type { Entity } from "./types";
import { getCategories, filterDataByCategory } from "./utils";

export class Store {
  isLoading = true;
  data: Entity[] = [];
  categoryToDisplay: string | null = null;

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      data: observable,
      categoryToDisplay: observable,

      categories: computed,
      filteredData: computed,

      getData: action,
      onCategorySelection: action,
    });
  }

  get categories(): Record<string, number> {
    return getCategories(this.data);
  }

  get filteredData(): Entity[] {
    // TODO filter by string

    return filterDataByCategory(this.data, this.categoryToDisplay);
  }

  private setIsLoading = (flag: boolean): void => {
    runInAction(() => (this.isLoading = flag));
  };

  public getData = async () => {
    this.setIsLoading(true);

    try {
      const { data } = await fetchData();

      runInAction(() => (this.data = data.results));
    } catch (e) {
      // TODO better interface
      window.alert(e);
    } finally {
      this.setIsLoading(false);
    }
  };

  public onCategorySelection = (category: string): void => {
    console.log("clicked category - " + category);
    console.log("Selected category - " + this.categoryToDisplay);

    if (this.categoryToDisplay === category) this.categoryToDisplay = null;
    else this.categoryToDisplay = category;
  };
}

export default Store;
