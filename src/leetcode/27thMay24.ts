function specialArray(nums: number[]): number {
  const isEachElInArrZero = nums.filter((item) => Boolean(item)).length === 0;

  if (isEachElInArrZero) return -1;

  const sortedArr = nums.sort((a, b) => a - b);

  console.log(sortedArr);

  for (let i = 0; i < nums.length; i++) {}

  return 0;
}

const arr = [1, 2, 0 ,5, 3];

specialArray(arr);
