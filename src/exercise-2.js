const getTheExactNumber = (numbers) => {
  // implement code here
  let prevNum = 0;
  numbers.forEach(num => {
    if(num % 3 === 0 && num > prevNum){
      prevNum = num;
    }
  });
  return prevNum;
}

export default getTheExactNumber;