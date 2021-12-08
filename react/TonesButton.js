import React, { useState, useEffect } from "react";
import axios from 'axios';
import styles from "./styles.css";

const Slack = () => {
  const [recognition, setRecognition] = useState(null);
  const [content, setContent] = useState("");
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [instructions, setInstructions] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (recognition) return;
    var speechRecognition = window.webkitSpeechRecognition;
    var recognition = new speechRecognition();
    setRecognition(recognition)
  }, []);

  useEffect(() => {
    if (!recognition) return;
    recognition.lang = "pt-BR";
    
    recognition.continuous = true;
    recognition.onstart = function () {
      setInstructions("Voice Recognition is On");
    };

    recognition.onspeechend = function () {
      setInstructions("No Activity");
    };

    recognition.onerror = function () {
      setInstructions("Try Again");
    };
    recognition.onresult = function (event) {
      var current = event.resultIndex;
      var transcript = event.results[current][0].transcript;
      var alert = event.results[current][0].transcript.split(" ");
      setName(alert[0]);
      setMessage(alert.join(" "));
      var utterance1 = new SpeechSynthesisUtterance(
        "Mensagem enviada para " + alert[0]
      );
      utterance1.lang = "pt-BR";
      speechSynthesis.speak(utterance1);

      setContent(transcript);
    };
  }, [recognition]);

  useEffect(() => sendMessage, [started])

  const startFunction = () => {
    recognition.start();
    setStarted(true)
  };

  const stopFunction = () => {
    recognition.stop();
    setStarted(false)
  };

  const sendMessage = async () => {
    try {
      const response = (await (axios({
        url: "/_v/sendMessage",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          name,
          message
        }
      }))).data
      setInstructions("Message sent to " + name)
    } catch (err) {
      setInstructions("Error")
    }
  }

  return (
    <>
      {started ? (
        <button onClick={stopFunction} className={styles["tones-button"]}>
          Stop Tones Button
        </button>
      ) : (
        <button onClick={startFunction} className={styles["tones-button"]}>
          Start Tones Button
        </button>
      )}
      <p>{content}</p>
      <p>{instructions}</p>
    </>
  );
};

export default Slack;
