const outputs = [];

function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
  // Ran every time a balls drops into a bucket
  outputs.push([dropPosition, bounciness, size, bucketLabel]);

  console.log(outputs);

}

function runAnalysis() {
  _.chain(outputs)
  .map(row => [distance(row[0]), row[3]])
  .sortBy(row =>[0])
  .slice(0, k)
  .countBy(row => row[1])
  .toPairs()
  .sortBy(row => row[1])
  .last()
  .first()
  .parseInt()
  .value()
}

function distance(point) {
  return Math.abs(point - predictionPoint);
}