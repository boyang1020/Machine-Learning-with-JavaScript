require('@tensorflow/tfjs-node');
const tf = require('@tensorflow/tfjs');
const loadCSV = require('./load-csv');
const LinearRegression = require('./linear-regression');
const plot = require('node-remote-plot');

let { features, labels, testFeatures, testLabels } = loadCSV('./cars.csv', {
    shuffle: true,
    splitTest: 50,
    dataColumns: ['horsepower', 'weight', 'displacement'],
    labelColumns: ['mpg']

});

const regression = new LinearRegression(features, labels, {
    learningRate: 0.1, 
    iterations: 100,
});

regression.features.print();
regression.train();
const r2 = regression.test(testFeatures, testLabels);

plot({
    x: regression.mseHistory.reverse(),
    xLabel: 'Iteration #',
    yLabel: 'Mean Square Error'
});

console.log('Updated M is:', regression.weights.get(1,0), 
            'Updated B is:', regression.weights.get(0,0),
            );
console.log('R2 is: ', r2);

console.log('MSE history: ', regression.mseHistory);

