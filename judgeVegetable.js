const judgeVegetable = (vegetables, metric) => {
  let bestVeggie = vegetables[0];
  for (let vegetable of vegetables) {
    if (vegetable[metric] > bestVeggie[metric]) {
      bestVeggie = vegetable;
    }
  }
  return bestVeggie.submitter;
};
