document
  .getElementById("fortune-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const birthMonth = document.getElementById("birthMonth").value.trim();
    const zodiac = getZodiacSign(birthMonth);
    const fortune = getRandomFortune();
    const symbol = getSymbol(zodiac);
    const luckNum = getRandomNumber();

    if (zodiac === "Unknown") {
      document.getElementById("result").innerText =
        "Please enter a valid month and cap sensitive";
    } else {
      document.getElementById("zSymbol").innerText = `${symbol}`;
      document.getElementById("result").innerText =
        `Your zodiac sign is: ${zodiac}.`;
      document.getElementById("result2").innerText = `Your fortune: ${fortune}`;
      document.getElementById("result3").innerText =
        `Your lucky number is: ${luckNum}`;
    }
  });

const fortunes = [
  "Enjoy the good luck a companion brings you.",
  "Fortune favors the brave.",
  "Serious trouble will bypass you.",
  "A very attractive person has a message for you.",
  "The love of your life is stepping into your planet this summer.",
  "You will conquer obstacles to achieve success.",
  "You already know the answer to the questions lingering inside your head.",
  "Flattery will go far tonight.",
  "You will be hungry again in one hour.",
  "You will find success in your endeavors.",
  "A new voyage will fill your life with untold memories.",
  "You will discover a new passion.",
];

// Function to get a random fortune
function getRandomFortune() {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomIndex];
}

// Function to get the zodiac sign based on the birth month
function getZodiacSign(month) {
  const zSigns = {
    January: "Capricorn",
    February: "Aquarius",
    March: "Pisces",
    April: "Aries",
    May: "Taurus",
    June: "Gemini",
    July: "Cancer",
    August: "Leo",
    September: "Virgo",
    October: "Libra",
    November: "Scorpio",
    December: "Sagittarius",
  };
  return zSigns[month] || "Unknown";
}

function getSymbol(zsigns) {
  const zSymbol = {
    Capricorn: "♑",
    Aquarius: "♒",
    Pisces: "♓",
    Aries: "♈",
    Taurus: "♉",
    Gemini: "♊",
    Cancer: "♋",
    Leo: "♌",
    Virgo: "♍",
    Libra: "♎",
    Scorpio: "♏",
    Sagittarius: "♐",
  };
  return zSymbol[zsigns] || "Unknown";
}

const luckyNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function getRandomNumber() {
  const randomIndex = Math.floor(Math.random() * 12) + 1;
  return luckyNum[randomIndex];
}
