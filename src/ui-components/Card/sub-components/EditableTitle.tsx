import React, { useState } from "react";

interface EditableTitleProps {
  title: string;
  onTitleUpdate: (updatedTitle: string) => void;
}

export const EditableTitle: React.FC<EditableTitleProps> = ({
  title,
  onTitleUpdate,
}) => {
  const [value, setValue] = useState(title);
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleIsEditMode = () => setIsEditMode(!isEditMode);

  const onBlur = () => {
    const isTitleUpdated = title !== value;

    if (isTitleUpdated) onTitleUpdate(value);

    toggleIsEditMode();
  };

  // TODO - focuse on element after switching to edit mode
  if (isEditMode)
    return (
      <input
        {...{
          type: "text",
          value,
          onChange: (e) => setValue(e.target.value),
          onBlur,
        }}
      />
    );

  return <h6 {...{ onClick: toggleIsEditMode }}>{value}</h6>;
};
