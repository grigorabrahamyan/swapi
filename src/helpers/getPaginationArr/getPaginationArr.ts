const getPaginationArr = (
  allItems: number,
  onePageItem: number,
  max: number,
  current: number
) => {
  const total = Math.ceil(allItems / onePageItem) || 0;

  const half = Math.floor(max / 2);
  let to = max;

  if (current + half >= total) {
    to = total;
  } else if (current > half) {
    to = current + half;
  }

  let from = Math.max(to - max, 0);

  const mainNumbers = Array.from(
    { length: Math.min(total, max) },
    (_, i) => i + 1 + from
  );

  if (current <= max) {
    let result = [...mainNumbers, "...", total];
    if (current === max) {
      result = [1, ...mainNumbers, "...", total];
    }
    return result;
  }
  if (current > total - max) {
    let result = [1, "...", ...mainNumbers];
    if (current === total - max + 1) {
      result = [1, "...", ...mainNumbers, total];
    }
    return result;
  }

  return [1, "...", ...mainNumbers, "...", total];
};

export default getPaginationArr;
