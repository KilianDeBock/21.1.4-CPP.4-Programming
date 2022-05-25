const convertTimeToString = (t, utc = 0) => {
  const date = new Date(t);
  date.setUTCHours(date.getUTCHours() + utc);
  const h = date.getUTCHours();
  const m = date.getUTCMinutes();
  const s = date.getUTCSeconds();

  return `${toBits(h, 2)}:${toBits(m, 2)}:${toBits(s, 2)}`;
};

const toBits = (input, n) => {
  let inputStr = String(input);
  while (inputStr.length < n) {
    inputStr = `0${inputStr}`;
  }
  return inputStr;
}

export {
  convertTimeToString,
  toBits,
}