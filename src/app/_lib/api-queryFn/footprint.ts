interface ParamsType {
  latitude: number;
  longitude: number;
  title: string;
  content?: string;
}

export const fetchMyFootPrints = async () => {
  try {
    const res = await fetch("/api/footprint");
    const data = await res.json();
    if (!res.ok) throw new Error(data.error);

    return data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const saveFootPrint = async ({
  latitude,
  longitude,
  title,
  content,
}: ParamsType) => {
  const res = await fetch("/api/footprint", {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
      latitude,
      longitude,
    }),
  });
  const data = await res.json();

  if (res.status === 400 || res.status === 500) throw new Error(data.error);
};
