import React from "react";

import { observer } from "mobx-react-lite";
import { useStore } from "../misc/useStore";
import { View } from "../misc/types";

import { Toggle, Tab } from "../ui-components";

interface NavProps {
  categories: Record<string, number>;
  onSelection: (category: string) => void;
  activeCategory: string;
  view: View;
  toggleView: () => void;
}
const UnconnectedNav: React.FC<NavProps> = ({
  categories,
  onSelection,
  activeCategory,
  view,
  toggleView,
}) => {
  const keys = Object.keys(categories);

  return (
    <nav className="flex-column sidebar">
      <div className="nav flex-column nav-pills ">
        {keys.map((category) => {
          const label = `${category} (${categories[category]})`;
          const isActive = category === activeCategory;

          return (
            <Tab
              key={category}
              {...{ label, value: category, onClick: onSelection, isActive }}
            />
          );
        })}
      </div>

      <Toggle
        {...{
          isChecked: Boolean(view === View.Gallery),
          onChange: toggleView,
          labelLeft: "Gallery",
          labelRight: "List",
        }}
      />
    </nav>
  );
};

export const StoreConnected = () => {
  const {
    categories,
    onCategorySelection,
    view,
    toggleView,
    categoryToDisplay,
  } = useStore();

  return (
    <UnconnectedNav
      {...{
        categories,
        onSelection: onCategorySelection,
        view,
        toggleView,
        activeCategory: categoryToDisplay ?? "",
      }}
    />
  );
};

export const Nav = observer(StoreConnected);

export default Nav;
