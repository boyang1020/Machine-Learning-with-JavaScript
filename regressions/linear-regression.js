const tf = require('@tensorflow/tfjs');

class LinearRegression {
    constructor(features, labels, options) {
        this.features = features;
        this.labels = labels;
        
        this.options = Object.assign({ learningRate: 0.1, iterations:  }, options);

    }
    train() {

    }
}

module.exports = LinearRegression;