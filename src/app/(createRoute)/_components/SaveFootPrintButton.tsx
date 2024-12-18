import { css } from "../../../../styled-system/css";

import Button from "@/app/_components/Button";
// import { saveFootPrint } from "@/app/_lib/api-queryFn/footprint";
// import { showToast } from "@/app/_lib/toast";

interface Props {
  handleSave: (title: string) => void;
}

const saveFootPrintButton = css({
  position: "absolute",
  right: "20px",
  bottom: "150px",
});

const SaveFootPrintButton = ({ handleSave }: Props) => {
  const handleClickSaveButton = async () => {
    const title = prompt("발도장의 제목을 지어주세요");
    if (title) {
      handleSave(title);
    }
  };

  return (
    <div className={saveFootPrintButton}>
      <Button color="oddu_black03" handleClick={handleClickSaveButton}>
        발자국 찍기
      </Button>
    </div>
  );
};

export default SaveFootPrintButton;
