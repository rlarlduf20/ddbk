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
