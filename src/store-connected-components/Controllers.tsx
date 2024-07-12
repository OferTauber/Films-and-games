import React from "react";

import { observer } from "mobx-react-lite";

import { useStore } from "../misc/useStore";
import { SortDirection } from "../misc/types";

export interface ControllersProps {
  filterBy: string;
  setFilterBy: (str: string) => void;
  onRefresh: () => void;
  sortDirection: SortDirection;
  toggleSortDirection: () => void;
}

const UnconnectedControllers: React.FC<ControllersProps> = ({
  filterBy,
  setFilterBy,
  onRefresh,
  sortDirection,
  toggleSortDirection,
}) => {
  const sortLabel = sortDirection === SortDirection.Asc ? "⬆️" : "⬇️";

  return (
    <div>
      <input
        type="text"
        value={filterBy}
        onChange={(e) => setFilterBy(e.target.value)}
      />
      <button onClick={() => setFilterBy("")}>Clear</button>
      <button onClick={onRefresh}>Refresh</button>
      <button onClick={toggleSortDirection}>Sort {sortLabel}</button>
    </div>
  );
};

const StoreConnected = () => {
  const { filterBy, setFilterBy, getData, sortDirection, toggleSortDirection } =
    useStore();

  return (
    <UnconnectedControllers
      {...{
        filterBy,
        setFilterBy,
        onRefresh: getData,
        sortDirection,
        toggleSortDirection,
      }}
    />
  );
};

export const Controllers = observer(StoreConnected);

export default Controllers;
