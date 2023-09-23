import React from "react";
import { useEffect } from "react";

export default function CheckBox(props: any) {
  const { label, isSelected, onChange } = props;

  useEffect(() => {
    console.log("CheckBox useEffect called. isSelected:", isSelected);
    console.log("isSelected: ", isSelected);
  }, [isSelected]);

  return (
    <>
      <div className="form-check">
        <label>
          <input
            type="checkbox"
            name={label}
            checked={isSelected}
            onChange={onChange}
            className="form-check-input"
          />
          <p>
            {label}
            {isSelected ? " is selected" : " is not selected"}
          </p>
        </label>
      </div>
    </>
  );
}
