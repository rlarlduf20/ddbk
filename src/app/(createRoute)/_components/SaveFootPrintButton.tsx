import { hstack } from "../../../../styled-system/patterns";

import FootIcon from "@/assets/icons/FootIcon";

interface Props {
  handleSave: (title: string) => void;
}

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

const SaveFootPrintButton = ({ handleSave }: Props) => {
  const handleClickSaveButton = async () => {
    const title = prompt("발도장의 제목을 지어주세요");
    if (title) {
      handleSave(title);
    }
  };

  return (
    <button
      type="button"
      className={saveButtonStyles}
      onClick={handleClickSaveButton}
    >
      <FootIcon size="42.67" />
    </button>
  );
};

export default SaveFootPrintButton;
