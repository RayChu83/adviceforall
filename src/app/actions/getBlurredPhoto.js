import { getPlaiceholder } from "plaiceholder";

export const getBlurredPhoto = async (photoUrl) => {
  const buffer = await fetch(photoUrl).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  const { base64 } = await getPlaiceholder(buffer);
  console.log(base64);
  return base64;
};
