// part 2


const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Madrid"],
    answer: 1
  },
  {
    question: "Which language runs in a browser?",
    options: ["Python", "C", "JavaScript"],
    answer: 2
  },
  
  {
    question: "give me my name",
    options: ["luck saini", "gaurav saini" , "anurag saini"],
    answer: 2

  }
];

let current = 0;

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").textContent = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      if (i === q.answer) {
        alert("Correct!");
      } else {
        alert("Wrong!");
      }
    };
    optionsDiv.appendChild(btn);
  });
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    alert("Quiz completed!");
  }
}

loadQuestion();




// part 3

async function getJoke() {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" }
  });
  const data = await res.json();
  document.getElementById("joke").textContent = data.joke;
}


 

// part 4
async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url); // ✅ Correct API call
    if (!response.ok) throw new Error("City not found!");

    const data = await response.json();

    const weatherHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
      <p><strong>Weather:</strong> ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind:</strong> ${data.wind.speed} m/s</p>
    `;

    document.getElementById("weatherResult").innerHTML = weatherHTML;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
