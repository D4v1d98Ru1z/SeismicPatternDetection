const brain =  require('brain.js');
const network = new brain.NeuralNetwork();

network.train([
    {input: [1,0,1,0,1], output:{lion:1}},
    {input: [1,1,0,1,0], output:{cat: 0}}
])

const result = network.run([1,0,1,0,1])
console.log(result);