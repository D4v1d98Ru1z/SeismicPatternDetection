const brain = require("brain.js");
const network = new brain.NeuralNetwork();

network.train([
    {input: {magnitud: 2.0, deep: 149}, output: {soft: 1}},
    {input: {magnitud: 2.8, deep: 117}, output: {soft: 1}},
    {input: {magnitud: 3.0, deep: 150}, output: {soft: 1}},
    {input: {magnitud: 3.8, deep: 0}, output: {strong: 1}},
    {input: {magnitud: 4.0, deep: 79}, output: {strong: 1}},
    {input: {magnitud: 3.1, deep: 145}, output: {soft: 1}},      
    {input: {magnitud: 3.2, deep: 108}, output: {soft: 1}},
    {input: {magnitud: 6.0, deep: 30}, output: {strong: 1}},
    {input: {magnitud: 7.9, deep: 45}, output: {strong: 1}},      
    {input: {magnitud: 4.1, deep: 0}, output: {strong: 1}},      
    {input: {magnitud: 3.4, deep: 0}, output: {strong: 1}},
    {input: {magnitud: 6.3, deep: 49}, output: {strong: 1}},
    {input: {magnitud: 2.9, deep: 168}, output: {soft: 1}}
      
]);

var seismic = {magnitud: 8.0, deep: 50};
const result = network.run(seismic);
console.log(result);