const transpose = (matrix) => {
  let transpose = [];
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (r === 0) {
        transpose.push([matrix[r][c]]);
      } else {
        transpose[c].push(matrix[r][c]);
      }
    }
  }
  return transpose;
}

const wordSearch = (letters, word) => {
  let isInRows = false;
  let isInColoumns = false;
  const horizontalJoin = letters.map(ls => ls.join(''))
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      isInRows = true;
      break;
    }
  }

  const VerticalJoin = transpose(letters).map(ls => ls.join(''))
  for (l of VerticalJoin) {
    if (l.includes(word)) {
      isInColoumns = true
      break;
    }
  }
  return isInRows || isInColoumns;
}
module.exports = wordSearch;