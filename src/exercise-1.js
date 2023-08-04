const getCommonItems = (array1, array2) => {
  // implement code here
  return array1.filter(number => {
    return array2.includes(number);
  });
};

export default getCommonItems;
