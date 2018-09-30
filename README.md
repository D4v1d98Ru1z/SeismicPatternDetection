# Seismic Pattern Detection

## About

In this project we are going to do seismic pattern detection for Colombia, using the data that the government provide to us, and using `brain.js` is a library of [Neural Networks](http://en.wikipedia.org/wiki/Artificial_neural_network) written in JavaScript.
    
# Usage

### Node
If you have [node](http://nodejs.org/), you can install `brain.js` with [npm](http://npmjs.org):

```
npm install brain.js
```

Or if you prefer yarn:
```
yarn add brain.js
```

At present, the published version of brain.js is approximately 1.0.0, featuring only Feed-forward NN. All other models are beta and are being jazzed up and battle hardened.
You can still download the latest, though. They are cool!

### Browser
Download the latest [brain.js for browser](https://cdn.rawgit.com/BrainJS/brain.js/master/browser.js). Training is computationally expensive, so you should try to train the network offline (or on a Worker) and use the `toFunction()` or `toJSON()` options to plug the pre-trained network into your website.
