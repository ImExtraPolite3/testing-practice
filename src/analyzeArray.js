const analyzeArray = {
  average: function average(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  },
  min: function min(array) {
    let getMin = array[0];
    for (let i = 0; i < array.length; i++) {
      if (array[i] < getMin) {
        getMin = array[i];
      }
    }
    return getMin;
  },
  max: function max(array) {
    let getMax = 0;
    for (let i = 0; i < array.length; i++) {
      if (getMax < array[i]) {
        getMax = array[i];
      }
    }
    return getMax;
  },
  length: function length(array) {
    return array.length;
  },
};

module.exports = analyzeArray;
