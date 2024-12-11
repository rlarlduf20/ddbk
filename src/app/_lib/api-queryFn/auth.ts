export const handleClickDuplicateBtn = async (loginId: string) => {
  try {
    const res = await fetch("/api/register/check-id-duplicate", {
      method: "POST",
      body: JSON.stringify({
        loginId,
      }),
    });

    const { isDuplicated } = await res.json();

    return isDuplicated;
  } catch {
    return null;
  }
};
