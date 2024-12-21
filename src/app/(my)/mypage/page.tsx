"use client";

import { useQuery } from "@tanstack/react-query";

import Loading from "@/app/_components/Loading";
import Typography from "@/app/_components/Typography";
import { fetchUser } from "@/app/_lib/api-queryFn/user";

const MyPage = () => {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user-nickname"],
    queryFn: () => fetchUser(),
  });

  if (isLoading) return <Loading>내 정보를 불러오는 중입니다.</Loading>;
  if (error) throw new Error(error.message);

  return (
    <div style={{ paddingTop: "100px" }}>
      <Typography.H1 color="oddu_green01">{user?.user?.name}</Typography.H1>
      <Typography.H2>오뚜~~ HI</Typography.H2>
      <Typography.H3>오뚜~~ HI</Typography.H3>
      <Typography.H4>오뚜~~ HI</Typography.H4>
      <Typography.H5>오뚜~~ HI</Typography.H5>
      <Typography.PLarge>오뚜~~ HI</Typography.PLarge>
      <Typography.PMedium>오뚜~~ HI</Typography.PMedium>
      <Typography.PSmall>오뚜~~ HI</Typography.PSmall>
    </div>
  );
};

export default MyPage;
