const getNumberType = (number) => {
  // implement code here
  if(number > 0){
    if(number % 2 == 0){
      return 'even number';
    }
    return 'odd number';
  } 
  return null;
};

export default getNumberType;