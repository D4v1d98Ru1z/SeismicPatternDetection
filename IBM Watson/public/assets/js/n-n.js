const brain = require("brain.js");
const network = new brain.NeuralNetwork();
//0-70 strong
//71->180 soft
network.train([
    {input: {magnitude: 2.0, depth: 149}, output: {soft: 1}},
    {input: {magnitude: 2.8, depth: 117}, output: {soft: 1}},
    {input: {magnitude: 3.0, depth: 150}, output: {soft: 1}},
    {input: {magnitude: 3.8, depth: 0}, output: {strong: 1}},
    {input: {magnitude: 4.0, depth: 79}, output: {soft: 1}},
    {input: {magnitude: 3.1, depth: 145}, output: {soft: 1}},      
    {input: {magnitude: 3.2, depth: 108}, output: {soft: 1}},
    {input: {magnitude: 6.0, depth: 30}, output: {strong: 1}},
    {input: {magnitude: 7.9, depth: 45}, output: {strong: 1}},      
    {input: {magnitude: 4.1, depth: 0}, output: {strong: 1}},      
    {input: {magnitude: 3.4, depth: 155}, output: {soft: 1}},
    {input: {magnitude: 6.3, depth: 49}, output: {strong: 1}},
    {input: {magnitude: 2.9, depth: 168}, output: {soft: 1}},
    {input: {magnitude: 2.3, depth: 0}, output: {strong: 1}}
]);
var num = 2.4;
var seismic = {magnitude: +num, depth: 144};
const result = network.run(seismic);
const s = brain.likely(seismic, network);

console.log(seismic);