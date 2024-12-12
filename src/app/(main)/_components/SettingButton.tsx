"use client";

import useRouterEvent from "@/app/_hooks/useRouterEvent";
import SettingIcon from "@/assets/icons/SettingIcon";

const SettingButton = () => {
  const { push } = useRouterEvent();

  const handleClick = () => {
    push({ path: "/settings" });
  };

  return (
    <button type="button" onClick={handleClick}>
      <SettingIcon />
    </button>
  );
};

export default SettingButton;
