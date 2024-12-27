export const analyzeArray = (arr) => {
  const average = arr.reduce((a, b) => a + b) / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  return { average, min, max, length };
};
