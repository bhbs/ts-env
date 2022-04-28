import crypto from "crypto";

export const v4 = () => {
  const rnds = new Uint8Array(16);
  crypto.randomFillSync(rnds);

  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  const byteToHex = [...Array(256)].map((_, i) =>
    (i + 0x100).toString(16).slice(1)
  );

  return (
    byteToHex[rnds[0]] +
    byteToHex[rnds[1]] +
    byteToHex[rnds[2]] +
    byteToHex[rnds[3]] +
    "-" +
    byteToHex[rnds[4]] +
    byteToHex[rnds[5]] +
    "-" +
    byteToHex[rnds[6]] +
    byteToHex[rnds[7]] +
    "-" +
    byteToHex[rnds[8]] +
    byteToHex[rnds[9]] +
    "-" +
    byteToHex[rnds[10]] +
    byteToHex[rnds[11]] +
    byteToHex[rnds[12]] +
    byteToHex[rnds[13]] +
    byteToHex[rnds[14]] +
    byteToHex[rnds[15]]
  ).toLowerCase();
};
