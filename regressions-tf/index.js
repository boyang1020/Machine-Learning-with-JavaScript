require('@tensorflow/tfjs-node');
const tf = require('@tensorflow/tfjs');
const loadCSV = require('./load-csv');
const LinearRegression = require('./linear-regression');

let { features, labels, testFeatures, testLabels } = loadCSV('./cars.csv', {
    shuffle: true,
    splitTest: 50,
    dataColumns: ['horsepower', 'weight', 'displacement'],
    labelColumns: ['mpg']

});

const regression = new LinearRegression(features, labels, {
    learningRate: 10, 
    iterations: 100,
});

regression.features.print();
regression.train();
const r2 = regression.test(testFeatures, testLabels);

console.log('Updated M is:', regression.weights.get(1,0), 
            'Updated B is:', regression.weights.get(0,0),
            );
console.log('R2 is: ', r2);

console.log('MSE history: ', regression.mseHistory);