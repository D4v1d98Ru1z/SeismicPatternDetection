const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
var fs = require('fs');

var textToSpeech = new TextToSpeechV1({
  username: '74f516e1-9e6e-474a-b69a-4b2db8cb9053',
  password: '3u2AX42XciPl',
  url: 'https://stream.watsonplatform.net/text-to-speech/api'
});

var params = {
  text: 'Hola, Soy Watson (ya sé que tengo voz de mujer) y estoy a tu servicio, bienvenido al aplicativo desarollado por Andres y David está realizado con NodeJS. SaLudos especiales a Andres Largo',
  voice: 'es-LA_SofiaVoice', // Optional voice
  accept: 'audio/wav'
};

textToSpeech
  .synthesize(params, function(err, audio) {
    if (err) {
      console.log(err);
      return;
    }
    textToSpeech.repairWavHeader(audio);
    fs.writeFileSync('public/audio.wav', audio);
    console.log('audio.wav written with a corrected wav header');
    express()
      .use(express.static(path.join(__dirname, 'public')))
      .use(express.static(__dirname + '/public'))
      .listen(PORT, () => console.log(`Listening on ${PORT}`))
});

