import { useSetAtom } from "jotai";

import { hstack } from "../../../../styled-system/patterns";

import { isDrawerOpenAtom } from "@/app/_atoms";
import FootIcon from "@/assets/icons/FootIcon";

const saveButtonStyles = hstack({
  width: "64px",
  height: "64px",
  bgColor: "oddu_green01",
  color: "oddu_white01",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
  borderRadius: "10px",
  cursor: "pointer",
  position: "absolute",
  right: "20px",
  bottom: "120px",
});

const SaveFootPrintButton = () => {
  const setDrawerStatus = useSetAtom(isDrawerOpenAtom);

  const handleClickOpenDrawer = async () => {
    setDrawerStatus(true);
  };

  return (
    <button
      type="button"
      className={saveButtonStyles}
      onClick={handleClickOpenDrawer}
    >
      <FootIcon size="42.67" />
    </button>
  );
};

export default SaveFootPrintButton;
