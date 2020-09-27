module.exports = function towelSort(matrix) {
  if (!matrix)
    return [];

  return matrix.reduce((out, item, index) => {
    out.push(...((index % 2) ? item.reverse() : item));

    return out;
  }, []);
}
