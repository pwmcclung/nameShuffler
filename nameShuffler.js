function nameShuffler(str){
  let arr1 = str.split(' ');
  let arr2 = arr1.shift()
  let arr3 = arr1.concat(arr2).join(' ')
  return arr3
}
