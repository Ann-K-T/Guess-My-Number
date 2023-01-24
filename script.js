'use strict';

// the name of the event/ argument is 'click' in the method 'addEventListener
/*
1st arguemt = name of event we are listening for 
2nd arguemt event handeler which is a function
3.  so 1st we selected the button using quesry selector, then we used hte add envent listener method on the element to attach an envent handler which is a function
4. this function will only be called only when the event happens so we dont call the function using parenthehis
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};

/// Whot to do when the button is clicked
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number';
    displaymessage('No number');

    // when guess is correct
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent ='This is the correct number ';
    displaymessage('This is the correct number');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when guess differs from secret number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displaymessage(guess > secretNumber ? 'Too high ' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displaymessage('you lost the game ');
      document.querySelector('body').style.backgroundColor = '#880808';
      document.querySelector('.score').textContent = 0;
    }
  }
});
//////////////////////////////////////////
// Restart
document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  console.log(secretNumber);
  Number((document.querySelector('.guess').value = ''));
  displaymessage('Start guessing...');

  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
