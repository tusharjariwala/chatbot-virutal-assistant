const voiceButton = document.querySelector(".voice");
const sentence = document.querySelector(".text");
const speak = (text) => {
  const sentence = new SpeechSynthesisUtterance(text);
  sentence.rate = 1;
  sentence.volume = 1;
  sentence.pitch = 1;
  window.speechSynthesis.speak(sentence);
};

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
  const voiceText = event.results[event.resultIndex][0].transcript;
  sentence.textContent = voiceText;
  takeSententce(voiceText.toLowerCase());
};

const speakSentence = () => {
  let date = new Date();
  let hours = date.getHours();
  if (hours >= 0 && hours <= 12) {
    console.log("hours");
    speak("Good morning user...");
  } else if (hours >= 12 && hours <= 17) {
    speak("Good after noon user...");
  } else if (hours >= 17 && hours <= 20) {
    speak("Good Evening user...");
  } else {
    speak("Good night user...");
  }
};
voiceButton.addEventListener("click", () => {
  sentence.textContent = "Listening...";
  recognition.start();
});

window.addEventListener("load", () => {
  speak("Welcome to  Assistant");
  speakSentence();
});
const takeSententce = (message) => {
  if (message.includes("hey") || message.includes("hello")) {
    speak("Hello user, How May I help You?");
  } else if (message.includes("can you please open google")) {
    window.open("https://google.com", "_blank");
    speak("Opening Google...");
  } else if (message.includes("Can you please open youtube")) {
    window.open("https://google.com", "_blank");
    speak("Opening Youtube...");
  }
};
