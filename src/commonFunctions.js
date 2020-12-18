export const calculate = (array1, array2) => {
  array1.sort(() => Math.random() - 0.5);
  let newArray = array2.map((item, index) => ({ ...item, pic: array1[index] }));
  return newArray;
};
