import GPSGroup from "../_components/GPSGroup";

import Typography from "@/app/_components/Typography";
import { auth } from "@/auth";

const MyPage = async () => {
  const session = await auth();
  return (
    <div style={{ paddingTop: "100px" }}>
      {session && <Typography.H1 color="main_pink">로그인중~!</Typography.H1>}
      <Typography.H2 color="main_green">오뚜~~ HI</Typography.H2>
      <Typography.H3>오뚜~~ HI</Typography.H3>
      <Typography.H4>오뚜~~ HI</Typography.H4>
      <Typography.H5>오뚜~~ HI</Typography.H5>
      <Typography.PLarge>오뚜~~ HI</Typography.PLarge>
      <Typography.PMedium>오뚜~~ HI</Typography.PMedium>
      <Typography.PSmall>오뚜~~ HI</Typography.PSmall>
      <GPSGroup />
    </div>
  );
};

export default MyPage;
