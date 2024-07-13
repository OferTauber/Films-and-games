import React from "react";

import { observer } from "mobx-react-lite";

import { useStore } from "../misc/useStore";
import { SortDirection } from "../misc/types";

import { Input, Button } from "../ui-components";

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
  const sortLabel = `Sort ${sortDirection === SortDirection.Asc ? "⬆️" : "⬇️"}`;

  return (
    <div className="controllers justify-content-md-center m-2">
      <Input
        {...{
          value: filterBy,
          onChange: setFilterBy,
          placeholder: "Filter results",
        }}
      />
      <Button {...{ onClick: () => setFilterBy(""), label: "Clear" }} />
      <Button {...{ onClick: onRefresh, label: "Refresh" }} />
      <Button {...{ onClick: toggleSortDirection, label: sortLabel }} />
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
