const questions = {
  //erste Entscheidung die getroffen werden muss, danach arbeite ich mich an den Ablauf Ketten lang...
  1: {
    question:
      "Hello Adventurer, on your quest to find an old treasure you stumbled upon a dragon egg!",
    choices: [
      {
        text: "Steal the egg.",
        next: 2,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Schatz.jpg"
      },
      {
        text: "Run away and never look back.",
        next: 5,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Weltkugel.jpg"
      },
      {
        text: "Keep the egg warm, it seems to be cold.",
        next: 36,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Dragon%20egg.jpg"
      }
    ]
  },
  //String: Steal the egg...
  2: {
    question: "What do you do now?",
    choices: [
      {
        text: "Leave for the next continent.",
        next: 3,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Weltkugel.jpg"
      },
      {
        text: "Go back home to hatch the egg.",
        next: 3,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Dragon%20egg.jpg"
      }
    ]
  },
  3: {
    question:
      "Uh Oh, dragon mothers can find their eggs ANYWHERE. You better run!",
    choices: [
      {
        text: "Continue.",
        next: 4,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Ghost%20RIP.jpg"
      }
    ]
  },
  4: {
    question:
      "You die slowly at the claws of the dragon mama. She was not amused by your theft!",
    choices: []
  }, // end of the first action string on to the second!

  //Now I continue with the run away and never look back story line

  5: {
    question:
      "You got away! But still, what will you do with this precious knowledge?",
    choices: [
      {
        text: "Talk with someone about it.",
        next: 6,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Person.jpg"
      },
      {
        text: "Never mention it again.",
        next: 27,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Person.jpg"
      }
    ]
  },
  //I will firstly continue with the talk with someone storyline
  6: {
    question: "Were you drunk while talking about the dragon egg?",
    choices: [
      {
        text: "Hell Yes!",
        next: 7,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Bier.jpg"
      },
      {
        text: "Nope, sadly I was as sober as I could possibly be!",
        next: 10,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Person.jpg"
      }
    ]
  },
  7: {
    question: "You accidentally started a manhunt for the fabled dragon egg.",
    choices: [
      {
        text: "Continue.",
        next: 8,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Dragon%20egg.jpg"
      }
    ]
  },
  8: {
    question:
      "The other adventures force you to be their guide. You lead them straight to the cave while cursing them out!",
    choices: [
      {
        text: "Continue.",
        next: 9,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Ghost%20RIP.jpg"
      }
    ]
  },
  9: {
    question:
      "The enraged dragon mother burns your ill advised troupe to the ground. Every single one of you idiots dies! ",
    choices: []
  },

  // now the story line where you werent drunk... still in telling someone about it!

  10: {
    question: "Some idiot lordling overhears you talking to your friend.",
    choices: [
      {
        text: "Watch as he sets out to claim the egg.",
        next: 11,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Dragon%20egg.jpg"
      },
      {
        text: "Try to stop him the next day.",
        next: 13,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Schatz.jpg"
      }
    ]
  },

  11: {
    question:
      "He dies in the dragons lair and his family holds you accountable for his demise!",
    choices: [
      {
        text: "Continue.",
        next: 12,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Ghost%20RIP.jpg"
      }
    ]
  },

  12: {
    question:
      "You die incarcerated in a lords dungeon since you caused his only heirs demise via dragon. At least in his opinon... You claim until your dying breath that it was all a slight misunderstanding!",
    choices: []
  },

  13: {
    question: "How do you try to bring the warning across?",
    choices: [
      {
        text:
          "Be condecending. What does a little lordling like you know about dragons?",
        next: 14,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Bier.jpg"
      },
      {
        text: "Be nice and helpful.",
        next: 16,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Schatz.jpg"
      }
    ]
  },

  14: {
    question:
      "He gives you the finger and goes anyway. Still, he told his father about the rude adventurer with the dragon egg...",
    choices: [
      {
        text: "Continue.",
        next: 15,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Dragon%20egg.jpg"
      }
    ]
  },

  15: {
    question: "He dies since the dragon is not happy about the intruder!",
    choices: [
      {
        text: "Continue.",
        next: 12,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Ghost%20RIP.jpg"
      }
    ]
  },

  16: {
    question: "You are tempted to join the adventure. What do you do?",
    choices: [
      {
        text: "Go with him and his family troops to claim the treasure.",
        next: 17,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Schatz.jpg"
      },
      {
        text: "Just share all your information and watch from the sidelines.",
        next: 19,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Schatz.jpg"
      }
    ]
  },

  17: {
    question:
      "Your Quest for the treasure is successful. As reward you gain a stable job at the lords court.",
    choices: [
      {
        text: "Continue.",
        next: 18,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Schatz.jpg"
      }
    ]
  },

  18: {
    question:
      "You are rich and live like a king for a few years. Just to die with the rest of the court after the enraged dragon mother finds you all! What do we learn from this? Never steal from a dragon!",
    choices: []
  },

  19: {
    question:
      "The adventures found the treasure without any problems! What are your future plans?",
    choices: [
      {
        text: "Join the court! Live a stable and rich life!",
        next: 18,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Schatz.jpg"
      },
      {
        text: "Get a payout after their return.",
        next: 20,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Schatz.jpg"
      }
    ]
  },
  //on to the conveluted story string... god help me...
  20: {
    question: "Great, now you are rich! What are you doing now?",
    choices: [
      {
        text: "Change your occupation.",
        next: 21,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Person.jpg"
      },
      {
        text: "Leave the continent.",
        next: 23,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Weltkugel.jpg"
      }
    ]
  },

  21: {
    question:
      "You live a quiet life with plenty of luxury and finally die of old age!",
    choices: [
      {
        text: "Continue.",
        next: 22,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Schatz.jpg"
      }
    ]
  },

  22: {
    question:
      "You had a great life overall! Adventuring is for fools am I right! ",
    choices: []
  },

  23: {
    question: "New place new me! What are you doing with your life now?",
    choices: [
      {
        text: "Get Famous! You are the greates Adventurer!",
        next: 24,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Schatz.jpg"
      },
      {
        text: "Lead a stable life in peace.",
        next: 26,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/home.jpg"
      }
    ]
  },

  24: {
    question:
      "The lord back home is not amused. You exposed his ill gained wealth to the greedy king. The whole adventure party was captured.",
    choices: [
      {
        text: "Continue.",
        next: 25,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Ghost%20RIP.jpg"
      }
    ]
  },

  25: {
    question: "You are all executed by the king for tax evasion and treason.",
    choices: []
  },

  26: {
    question:
      "You live happily with your new family and to this day, you tell your grandchildren about the time you were: young and stupid, and nearly stole a dragons egg.",
    choices: []
  },
  //finally reached the never mention it again story line thank god...

  27: {
    question:
      "So, I know we don't talk about the dragon but what are you doing with your life?",
    choices: [
      {
        text: "Change your occupation.",
        next: 28,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Person.jpg"
      },
      {
        text: "Adventuring is my life! I would never give it up!",
        next: 29,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Drache.jpg"
      }
    ]
  },

  28: {
    question: "You live a quiet and happy life and finally die of old age!",
    choices: [
      {
        text: "Continue.",
        next: 22,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/home.jpg"
      }
    ]
  },

  29: {
    question: "You start a new adventure! What will you find?",
    choices: [
      {
        text: "To get a fresh start you start over on another continent.",
        next: 30,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Weltkugel.jpg"
      },
      {
        text: "Dragons seem to be your thing! You find a second one!",
        next: 33,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Drache.jpg"
      }
    ]
  },

  30: {
    question: "New place new me! How do you continue?",
    choices: [
      {
        text: "Get famous! You are the greatest!",
        next: 31,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Schatz.jpg"
      },
      {
        text: "Lead a stable but ordinary adventure life.",
        next: 26,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/home.jpg"
      }
    ]
  },

  31: {
    question:
      "You bragged one to many times and other adventurers captured you. Now you are forced to return.",
    choices: [
      {
        text: "Continue.",
        next: 32,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Ghost%20RIP.jpg"
      }
    ]
  },

  32: {
    question:
      "The dragon is not impressed by your raid party. Sadly for you she doesn't suffer idiots and doesn't listen to your explanation of how you were forced to be there. The last thing you hear is: Next time, don't brag - Idiot!",
    choices: []
  },

  33: {
    question:
      "This is too much! You run away again and change your occupation. What are you doing now?",
    choices: [
      {
        text: "You decide to be a farmer and lead a stable and happy life.",
        next: 26,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/home.jpg"
      },
      {
        text: "Try a life as a dragon seeker for other adventurers.",
        next: 34,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Drache.jpg"
      }
    ]
  },

  34: {
    question:
      "You are a dragon magnet! You get rich verry quickly due to your high dragon discovery rate! Congrats!",
    choices: [
      {
        text: "Continue.",
        next: 35,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Schatz.jpg"
      }
    ]
  },

  35: {
    question:
      "Except, the dragons are not impressed by the sudden influx of intruders. They kidnap you and hold you prisoner in a beautiful cave for the rest of your life. Have you never heard the saying: Don't tickle a sleeping dragon?",
    choices: []
  },
  //Done! The second story string is officially completed! HurraH!

  // Saving the egg story line like serious what else would you do???

  36: {
    question:
      "Now you are cuddling with the egg...really? Anyways, it gets darker by the second, what do you do?",
    choices: [
      {
        text: "Leave the nest by nightfall.",
        next: 37,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Night.jpg"
      },
      {
        text: "Keep the egg warm even as the night descends around you.",
        next: 45,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Dragon%20egg.jpg"
      }
    ]
  },
  // Abandoning the egg! you monster...

  37: {
    question:
      "Now it is dark and you are stumbling about. What is your next idea?",
    choices: [
      {
        text: "Rest in the forest.",
        next: 38,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Night.jpg"
      },
      {
        text: "Travell throughout the night.",
        next: 40,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Night.jpg"
      }
    ]
  },

  38: {
    question:
      "The hungry dragon mother finds you smelling like her egg. Yeah you got a tiny issue there brave adventurer...",
    choices: [
      {
        text: "Continue.",
        next: 39,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Ghost%20RIP.jpg"
      }
    ]
  },

  39: {
    question:
      "She eats you in one bite just to be sure you don't give away her nests location. And hey - even a mosquito is meat, am I right!",
    choices: []
  },

  40: {
    question:
      "You reach your village at the same time as the dragon. What do you do, brave adventurer? ",
    choices: [
      {
        text: "Flee!!!",
        next: 41,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Weltkugel.jpg"
      },
      {
        text: "Face the dragon unarmed and explain.",
        next: 43,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Drache.jpg"
      }
    ]
  },

  41: {
    question:
      "Your village is burnt down by the dragon. She sends a clear message: Intuders pay the price!",
    choices: [
      {
        text: "Continue.",
        next: 42,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Drache.jpg"
      }
    ]
  },

  42: {
    question:
      "You spend the rest of your life on the run. Always waiting for the dragon to hunt you down.",
    choices: []
  },

  43: {
    question:
      "She listens to you and then kidnaps you since she needs a babysitter and you seem to be honest and harmless.",
    choices: [
      {
        text: "Continue.",
        next: 44,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Dragon%20egg.jpg"
      }
    ]
  },

  44: {
    question:
      "You are now a caretaker for the dragon babies! You never imagined that life could be so peaceful. Sometimes life gives you lemons and then makes the lemonade free of charge as well.",
    choices: []
  },

  //The last string! Yuhu! this time you keep the eggs warm and save!
  45: {
    question: "Suddenly a group of monsters appears. What do you do?",
    choices: [
      {
        text: "Protect the egg!",
        next: 46,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Dragon%20egg.jpg"
      },
      {
        text: "Fight to keep the egg save!",
        next: 51,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Dragon%20egg.jpg"
      }
    ]
  },

  46: {
    question:
      "After a few minutes the dragon mother returns and sees how you protect her egg with everything you have.",
    choices: [
      {
        text: "Continue.",
        next: 47,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Dragon%20egg.jpg"
      }
    ]
  },

  47: {
    question: "She offers you a choice after she eats the last monster.",
    choices: [
      {
        text: "Get a monetary reward.",
        next: 48,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Schatz.jpg"
      },
      {
        text: "Get a boon.",
        next: 49,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Drache.jpg"
      }
    ]
  },

  48: {
    question:
      "You leave the hoard a rich adventurer and you spend the rest of your life in luxury and decadence.",
    choices: []
  },

  49: {
    question: "She adopts you as a honorary dragon. ",
    choices: [
      {
        text: "Continue.",
        next: 50,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Drache.jpg"
      }
    ]
  },

  50: {
    question:
      "You live a dragons life and your tale becomes a legend for dragons and humans alike! Hey you nearly got the same respect as a god! Good for you! I am so proud!",
    choices: []
  },
  //now onto the fight to protect the egg storyline...

  51: {
    question:
      "The dragon comes late and you are on your last breath. She honours your sacrifice for her clutch and offers you a choice:",
    choices: [
      {
        text: "Be reborn as a dragon to her clutch.",
        next: 52,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Dragon%20egg.jpg"
      },
      {
        text: "Become a half dragon in order to survive your wounds.",
        next: 53,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Drache.jpg"
      }
    ]
  },

  52: {
    question:
      "You lead a long and glorious life as a dragon never to know any hardship. Wow! I am so jealous! I want to be a dragon too!!!",
    choices: []
  },

  53: {
    question:
      "Now you are an hybrid! Do you life in both worlds or do you chose the dragons.",
    choices: [
      {
        text: "Both Worlds!",
        next: 54,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Weltkugel.jpg"
      },
      {
        text: "Dragons!",
        next: 55,
        img:
          "https://hbk-bs.github.io/the-archives-MaddyRethmeier/assets/images/Drache.jpg"
      }
    ]
  },

  54: {
    question:
      "You become a great diplomat and you lead your continent into a golden time of peace! See, see... The adventurer knows how to think! Or was the intelligence a gift of the dragon blood? Anyways, congrats! Your name can be found in the history books all over the world!",
    choices: []
  },

  55: {
    question:
      "The dragons are delighted to have such a blessed creature in their clan. You become a high priest and care for the community! Who would have thought, you had it in you! The brute has a heart made of gold! Aww... Anyways, cuddle the hatchlings in my stead! Man I am so jealous... ",
    choices: []
  }

};

let currentQuestionId = 1;

function showQuestion() {
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const tryAgainButton = document.getElementById("try-again");

  const currentQuestion = questions[currentQuestionId];
  questionElement.innerText = currentQuestion.question;
  choicesElement.innerHTML = "";
  tryAgainButton.style.display = "none"; 

  if (currentQuestion.choices.length === 0) {
    
    tryAgainButton.style.display = "block"; 
    return;
  }

  currentQuestion.choices.forEach((choice) => {
    const choiceDiv = document.createElement("div");
    choiceDiv.classList.add("choice");

    const img = document.createElement("img");
    img.src = choice.img; 
    img.alt = choice.text; 

    const button = document.createElement("button");
    button.innerText = choice.text;
    button.addEventListener("click", () => {
      currentQuestionId = choice.next;
      showQuestion();
    });

    choiceDiv.appendChild(img);
    choiceDiv.appendChild(button);
    choicesElement.appendChild(choiceDiv);
  });
}


document.getElementById("try-again").addEventListener("click", () => {
  currentQuestionId = 1; 
  showQuestion();
});

showQuestion();





