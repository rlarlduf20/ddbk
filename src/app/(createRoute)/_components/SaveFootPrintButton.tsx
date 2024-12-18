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
    // try {
    //   await saveFootPrint({
    //     title: "여러개 테스트",
    //     content: "여러개 테스트용입니다.",
    //     latitude: 37.579293849225756,
    //     longitude: 126.97798076343491,
    //   });
    // } catch (error: any) {
    //   showToast({ type: "error", message: error.message });
    // }
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
