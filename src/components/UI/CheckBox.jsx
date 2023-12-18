/* eslint-disable react/prop-types */
import { useState } from "react";

export const CheckBox = ({ pressed }) => {
  const [checked, setChecked] = useState(pressed);

  const toggle = () => {
    setChecked(!checked);
  };
  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        onClick={{ toggle }}
        className="h-[16px] w-[16px] mx-[16px]"
      />
    </>
  );
};
