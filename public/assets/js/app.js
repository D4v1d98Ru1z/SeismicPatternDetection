var magn = Math.floor(Math.random() * (10 * 10 - 1 * 10) + 1 * 10) / (1 * 10);
var depth = Math.floor(Math.random() * 150);
var result;
    const data = {
        magnitud: +magn,
        profundidad: +depth
    };
TrainingNetwork();

function TrainingNetwork(){
    const network = new brain.NeuralNetwork();


    var location = ["Mesa de los Santos, Santander", "El peñon, Santander", "San Antonio, Tolima", "Isnos, Huila"];
    // here we call the function to set the dinamic data

    network.train([
        {input: {magnitud: 2.0, profundidad: 149}, output: {suave: 1}},
        {input: {magnitud: 2.8, profundidad: 117}, output: {suave: 1}},
        {input: {magnitud: 3.0, profundidad: 150}, output: {suave: 1}},
        {input: {magnitud: 3.8, profundidad: 0}, output: {fuerte: 1}},
        {input: {magnitud: 4.0, profundidad: 79}, output: {suave: 1}},
        {input: {magnitud: 3.1, profundidad: 145}, output: {suave: 1}},      
        {input: {magnitud: 3.2, profundidad: 108}, output: {suave: 1}},
        {input: {magnitud: 6.0, profundidad: 30}, output: {fuerte: 1}},
        {input: {magnitud: 7.9, profundidad: 45}, output: {fuerte: 1}},      
        {input: {magnitud: 4.1, profundidad: 0}, output: {fuerte: 1}},      
        {input: {magnitud: 3.4, profundidad: 155}, output: {suave: 1}},
        {input: {magnitud: 6.3, profundidad: 49}, output: {fuerte: 1}},
        {input: {magnitud: 2.9, profundidad: 168}, output: {suave: 1}},
        {input: {magnitud: 2.3, profundidad: 0}, output: {fuerte: 1}},
        {input: {magnitud: 8.1, profundidad: 9}, output: {fuerte: 1}},
        {input: {magnitud: 5.3, profundidad: 6}, output: {fuerte: 1}},
        {input: {magnitud: 4.3, profundidad: 140}, output: {suave: 1}},
        {input: {magnitud: 1.3, profundidad: 80}, output: {suave: 1}},
        {input: {magnitud: 9.1, profundidad: 81}, output: {fuerte: 1}},
        {input: {magnitud: 8.8, profundidad: 77}, output: {fuerte: 1}},
        {input: {magnitud: 9.7, profundidad: 20}, output: {fuerte: 1}},
        {input: {magnitud: 2.3, profundidad: 170}, output: {suave: 1}},
        {input: {magnitud: 1.2, profundidad: 90}, output: {suave: 1}},
        {input: {magnitud: 2.6, profundidad: 40}, output: {suave: 1}},
        {input: {magnitud: 5.3, profundidad: 57}, output: {fuerte: 1}}
    ]);

    result = brain.likely(data, network);
    document.getElementById("depth").innerHTML = "El sismo registrado se clasifica como: " +result;

    document.getElementById("magnitude").innerHTML = "Infromación sismica: "+JSON.stringify(data);
    document.getElementById("loc").innerHTML = "Localización: " + location[ Math.floor(Math.random()*3)];
}