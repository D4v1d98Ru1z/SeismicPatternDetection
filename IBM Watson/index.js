const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
var fs = require('fs');
var io = require("socket.io");
io = io.listen(12543);
var AssistantV1 = require('watson-developer-cloud/assistant/v1');

io.sockets.on('connection', function (socket) {
  socket.on('my other event', function (data) {
    var texti;
    if (data.veredicto == "suave") {
      texti = "Hey! Gracias por preguntar con los datos que me estás dando magnitud de " + data.magnitud + " y profundidad de " + data.profundidad + " kilómetros. déjame pensar... Es suave, pero igualmente ten cuidado avísa a todos.";
    } else {
      texti = "Hey! Gracias por preguntar con los datos que me estás dando magnitud de " + data.magnitud + " y profundidad de " + data.profundidad + " kilómetros. déjame pensar... ¡Es grave! Corran todos estamos en peligro adiós mundo... Diosito sálvanos";
    }
    var params = {
      text: texti,
      voice: 'es-LA_SofiaVoice', // Optional voice
      accept: 'audio/wav'
    };

    textToSpeech
      .synthesize(params, function (err, audio) {
        if (err) {
          console.log(err);
          return;
        }
        textToSpeech.repairWavHeader(audio);
        fs.writeFileSync('public/audio2.wav', audio);
        socket.emit('news', {
          estado: 'ok'
        });

      });
  });
  
});
var assistant = new AssistantV1({
  username: '47048b1f-c2e0-468f-aed8-dc1f6d298a7f',
  password: '8PCRpSVpHJeb',
  url: 'https://gateway.watsonplatform.net/assistant/api/',
  version: '2018-02-16'
});

assistant.message({
    input: {
      text: "Hello"
    },
    workspace_id: '84b152e9-ef32-47c7-90b3-f51e87e322bf'
  },
  function (err, response) {
    if (err) {
      console.error(err);
    } else {
    //  io.socket.emit('news', {mensaje: response.input.text, respuesta: response.output.text});
      console.log(JSON.stringify(response, null, 2));
    }
  }
);
/*
// initiate socket.io server 
io.sockets.on('connection', function (socket) {
   socket.emit('news', { hello: 'world' });
        socket.on('my other event', function (data) { 
          console.log(data); 
          if(data.veredicto == "suave"){
            hablar("Hey! Gracias por preguntar con los datos que me estás dando magnitud de "+ data.magnitud + " y profundidad de "+ data.profundidad + "déjame pensar... Es suave, pero igualmente ten cuidado avísa a todos.");
          } else {
            hablar("Hey! Gracias por preguntar con los datos que me estás dando magnitud de " + data.magnitud + " y profundidad de " + data.profundidad + "déjame pensar... ¡Es grave! Corran todos estamos en peligro adiós mundo... Diosito sálvanos");
          }
        }); 
      }
 ); */
var textToSpeech = new TextToSpeechV1({
  username: '74f516e1-9e6e-474a-b69a-4b2db8cb9053',
  password: '3u2AX42XciPl',
  url: 'https://stream.watsonplatform.net/text-to-speech/api'
});


function hablar(data) {
  var params = {
    text: "data",
    voice: 'es-LA_SofiaVoice', // Optional voice
    accept: 'audio/wav'
  };

  textToSpeech
    .synthesize(params, function (err, audio) {
      if (err) {
        console.log(err);
        return;
      }
      textToSpeech.repairWavHeader(audio);
      fs.writeFileSync('public/audio2.wav', audio);
      socket.emit('news', {
        estado: 'ok'
      });

    });
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.static(__dirname + '/public'))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))