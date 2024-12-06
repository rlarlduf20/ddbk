"use client";

import { useQuery } from "@tanstack/react-query";

import Loading from "@/app/_components/Loading";
import Typography from "@/app/_components/Typography";

const MyPage = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user-nickname"],
    queryFn: async () => {
      const res = await fetch("/api/user");
      const data = await res.json();

      return data;
    },
  });

  if (isLoading) return <Loading />;

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
