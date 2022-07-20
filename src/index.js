
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let ps = [];
  
  
  if(matrix === undefined){return []}
  if(matrix.length == 0){return matrix}
  for (let index = 0; index < matrix.length; index++) {
    
    if(index % 2 === 0) ps = ps.concat(matrix[index]);
    else if(index % 2 > 0) ps = ps.concat(matrix[index].reverse());
    
  }
  return ps;
}
