export const fetchUser = async () => {
  try {
    const res = await fetch("/api/user");
    const data = await res.json();
    if (!res.ok) throw new Error(data.error);

    return data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const editNickname = async (nickname: string) => {
  const res = await fetch("/api/user/edit-nickname", {
    method: "POST",
    body: JSON.stringify({
      newNickname: nickname,
    }),
  });
  const data = await res.json();

  if (res.status === 400) throw new Error(data.error);
};
