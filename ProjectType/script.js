const words = ["javascript", "typing", "game", "challenge", "code", "developer", "browser", "keyboard", "speed", "practice"];
let score = 0;

const wordDisplay = document.getElementById("wordDisplay");
const wordInput = document.getElementById("wordInput");
const scoreDisplay = document.getElementById("scoreDisplay");
const resetButton = document.getElementById("resetButton");

// Load multiple sound effects
const sounds = [
  document.getElementById("clickSound1"),
  document.getElementById("clickSound2"),
  document.getElementById("clickSound3"),
  document.getElementById("clickSound4")
];

function randomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function updateWord() {
  wordDisplay.classList.remove('fade-in');
  wordDisplay.textContent = randomWord();
  wordDisplay.classList.add('fade-in');
}

function playRandomSound() {
  const randomIndex = Math.floor(Math.random() * sounds.length);
  const sound = sounds[randomIndex];
  sound.currentTime = 0;  // Rewind to start if playing
  sound.play();
}

wordInput.addEventListener("input", () => {
  playRandomSound();  // Play a random sound on key press

  if (wordInput.value === wordDisplay.textContent) {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    wordInput.value = "";
    updateWord();
  }
});

resetButton.addEventListener("click", () => {
  score = 0;
  scoreDisplay.textContent = `Score: ${score}`;
  wordInput.value = "";
  updateWord();
});

// Start the game by showing the first word
updateWord();
