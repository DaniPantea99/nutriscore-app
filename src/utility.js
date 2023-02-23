function format2Decimals(str) {
  // console.log(str)
  // const num = parseFloat(str);
  // console.log(num)
  // return Math.round(num * 100) / 100;

  const num = +((str).toFixed(2))
  return num
}

export {format2Decimals}