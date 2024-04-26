const a = () => {
  const arr = [1, 2, 3];
  const map = new Map();
  arr.forEach((v) => {
    map.set(v, v);
  });
  return map;
}

export { a };
