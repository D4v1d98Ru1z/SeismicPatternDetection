const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
var fs = require('fs');
var io = require('socket.io').listen(80); 
// initiate socket.io server 
io.sockets.on('connection', function (socket) {
   socket.emit('news', { hello: 'world' });
        socket.on('my other event', function (data) { 
          console.log(data); 
        }); 
      }
 ); 
var textToSpeech = new TextToSpeechV1({
  username: '74f516e1-9e6e-474a-b69a-4b2db8cb9053',
  password: '3u2AX42XciPl',
  url: 'https://stream.watsonplatform.net/text-to-speech/api'
});


function hablar(data){
  var params = {
    text: data,
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

  });
}
  
    express()
      .use(express.static(path.join(__dirname, 'public')))
      .use(express.static(__dirname + '/public'))
      .listen(PORT, () => console.log(`Listening on ${PORT}`))