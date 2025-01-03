import { FootprintType } from "@/app/_types/footprint";

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

export const saveFootPrint = async (footprints: FootprintType[]) => {
  const res = await fetch("/api/footprint", {
    method: "POST",
    body: JSON.stringify({ footprints }),
  });
  const data = await res.json();

  if (res.status === 400 || res.status === 500) throw new Error(data.error);
};
