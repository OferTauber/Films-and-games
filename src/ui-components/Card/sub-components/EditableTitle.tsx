import React, { useState, useEffect, useRef } from "react";

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
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleIsEditMode = () => setIsEditMode(!isEditMode);

  const onBlur = () => {
    const isTitleUpdated = title !== value;

    if (isTitleUpdated) onTitleUpdate(value);

    toggleIsEditMode();
  };

  useEffect(() => {
    if (isEditMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditMode]);

  if (isEditMode) {
    return (
      <input
        {...{
          type: "text",
          value,
          onChange: (e) => setValue(e.target.value),
          onBlur,
          ref: inputRef,
        }}
      />
    );
  }

  return (
    <h6 {...{ onClick: toggleIsEditMode }}>{value || "Missing name 🥺"}</h6>
  );
};
