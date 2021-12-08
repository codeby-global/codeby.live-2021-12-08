var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()

recognition.lang = 'pt-BR';

var textbox = $("#textbox")
var instructions = $("#instructions")
var content = ''
recognition.continuous = true
recognition.onstart = function () {
    instructions.text("Voice Recognition is On")
}

recognition.onspeechend = function () {
    instructions.text("No Activity")
}

recognition.onerror = function () {
    instruction.text("Try Again")
}

recognition.onresult = function (event) {
    var current = event.resultIndex;
    var transcript = event.results[current][0].transcript
    var alert = event.results[current][0].transcript.split(' ')
    console.log(alert[0]);
    var utterance1 = new SpeechSynthesisUtterance(alert[0] + ",Essa foi fácil!");
    utterance1.lang = 'pt-BR';
    speechSynthesis.speak(utterance1)

    content += transcript
    textbox.val(content)
}

$("#start-btn").click(function (event) {
    recognition.start()
})


$("#stop-btn").click(function (event) {
    recognition.stop()
})


textbox.on('input', function () {
    content = $(this).val()
})