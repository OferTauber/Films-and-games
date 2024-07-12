import React from "react";

import { observer } from "mobx-react-lite";
import { useStore } from "../misc/useStore";

interface NavProps {
  categories: Record<string, number>;
  onSelection: (category: string) => void;
}
const UnconnectedNav: React.FC<NavProps> = ({ categories, onSelection }) => {
  const keys = Object.keys(categories);

  return (
    <nav>
      {keys.map((category) => {
        const onClick = () => onSelection(category);
        const label = `${category} (${categories[category]})`;

        return (
          <button key={category} {...{ onClick }}>
            {label}
          </button>
        );
      })}
    </nav>
  );
};

export const StoreConnected = () => {
  const { categories, onCategorySelection } = useStore();

  return (
    <UnconnectedNav {...{ categories, onSelection: onCategorySelection }} />
  );
};

export const Nav = observer(StoreConnected);

export default Nav;
