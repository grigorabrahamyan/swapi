import { expect, test } from "@jest/globals";
import getPaginationArr from "./getPaginationArr";

test("Check pagination", () => {
  expect(getPaginationArr(82, 10, 3, 1)).toEqual([1, 2, 3, "...", 9]);
  expect(getPaginationArr(82, 10, 3, 9)).toEqual([1, "...", 7, 8, 9]);
  expect(getPaginationArr(455, 10, 3, 9)).toEqual([
    1,
    "...",
    8,
    9,
    10,
    "...",
    46,
  ]);
  expect(getPaginationArr(455, 15, 3, 9)).toEqual([
    1,
    "...",
    8,
    9,
    10,
    "...",
    31,
  ]);
  expect(getPaginationArr(82, 10, 3, 6)).toEqual([1, "...", 5, 6, 7, "...", 9]);
  expect(getPaginationArr(82, 10, 3, 2)).toEqual([1, 2, 3, "...", 9]);
  expect(getPaginationArr(101, 10, 3, 3)).toEqual([1, 2, 3, 4, "...", 11]);
});
