const transpose = function (matrix) {
    let result = [];
    for (let i = 0; i < matrix[0].length; i++) {
      let col = [];
      for (let j = 0; j < matrix.length; j++) {
        col.push(matrix[j][i]);
      }
      result.push(col);
    }
    return result;
  };


const wordSearch = (letters, word) => {
    if (!letters) return false;
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (const l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    for (const l of verticalJoin) {
        if (l.includes(word)) return true;
    }
    return false;
}

module.exports = wordSearch