function format2Decimals(str) {
  const num = parseFloat(str);
  return Math.round(num * 100) / 100;

  // const num = +((str).toFixed(2))
  // return num
}

export {format2Decimals}