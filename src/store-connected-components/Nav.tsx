import React from "react";

import { observer } from "mobx-react-lite";
import { useStore } from "../misc/useStore";
import { View } from "../misc/types";

interface NavProps {
  categories: Record<string, number>;
  onSelection: (category: string) => void;
  view: View;
  toggleView: () => void;
}
const UnconnectedNav: React.FC<NavProps> = ({
  categories,
  onSelection,
  view,
  toggleView,
}) => {
  const keys = Object.keys(categories);

  return (
    <nav>
      <div>
        {keys.map((category) => {
          const onClick = () => onSelection(category);
          const label = `${category} (${categories[category]})`;

          return (
            <button key={category} {...{ onClick }}>
              {label}
            </button>
          );
        })}
      </div>
      {/* Replace with a molecule */}
      <input
        {...{
          type: "checkbox",
          checked: view === View.Gallery,
          onChange: () => toggleView(),
        }}
      />
    </nav>
  );
};

export const StoreConnected = () => {
  const { categories, onCategorySelection, view, toggleView } = useStore();

  return (
    <UnconnectedNav
      {...{ categories, onSelection: onCategorySelection, view, toggleView }}
    />
  );
};

export const Nav = observer(StoreConnected);

export default Nav;
