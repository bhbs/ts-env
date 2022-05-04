import { expect, test } from "vitest";

const traverse = <T>(array: T[][]) => {
  return array[0].map((_, column) => array.map((row) => row[column]));
};

test("inline", () => {
  expect(`\n${traverse([
    //
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
    .map((row) => row.join(","))
    .join("\n")}
  `).toMatchInlineSnapshot(`
    "
    1,4,7
    2,5,8
    3,6,9
      "
  `);
});
