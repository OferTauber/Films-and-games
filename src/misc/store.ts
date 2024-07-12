import {
  makeObservable,
  observable,
  action,
  computed,
  runInAction,
} from "mobx";

import { getData as fetchData } from "./mock-api";
import { Entity, SortDirection, View } from "./types";
import { getCategories, filterData } from "./utils";

export class Store {
  isLoading = true;
  data: Entity[] = [];
  categoryToDisplay: string | null = null;
  filterBy = "";
  sortDirection: SortDirection = SortDirection.Asc;
  view: View = View.List;

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      data: observable,
      categoryToDisplay: observable,
      filterBy: observable,
      sortDirection: observable,
      view: observable,

      categories: computed,
      filteredData: computed,

      getData: action,
      onCategorySelection: action,
      setFilterBy: action,
      toggleSortDirection: action,
      toggleView: action,
    });
  }

  get categories(): Record<string, number> {
    return getCategories(this.data);
  }

  get filteredData(): Entity[] {
    const {
      data,
      categoryToDisplay: category,
      filterBy: searchValue,
      sortDirection,
    } = this;

    const filtered = filterData({ data, category, searchValue });
    const sorted = filtered.sort((a, b) => {
      const sort = a.Title.localeCompare(b.Title);

      return sortDirection * sort;
    });

    return sorted;
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
    if (this.categoryToDisplay === category) this.categoryToDisplay = null;
    else this.categoryToDisplay = category;
  };

  public setFilterBy = (str: string): void => {
    this.filterBy = str;
  };

  public toggleSortDirection = () => {
    const isAcd = this.sortDirection === SortDirection.Asc;

    this.sortDirection = SortDirection[isAcd ? "Desc" : "Asc"];
  };

  public toggleView = () => {
    const isList = this.view === View.List;

    this.view = View[isList ? "Gallery" : "List"];
  };
}

export default Store;
