import React from "react";

import { observer } from "mobx-react-lite";
import { useStore } from "../misc/useStore";

interface NavProps {
  categories: Record<string, number>;
  onSelection: (category: string) => void;
}
const _Nav: React.FC<NavProps> = ({ categories, onSelection }) => {
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

const Observed = observer(_Nav);

export const Nav = () => {
  const { categories } = useStore();

  const onSelection = (str: string) => {
    console.log(str);
  };

  return <Observed {...{ categories, onSelection }} />;
};

export default Nav;
