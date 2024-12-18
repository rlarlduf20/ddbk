interface ParamsType {
  latitude: number;
  longitude: number;
  title: string;
  content?: string;
}

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
