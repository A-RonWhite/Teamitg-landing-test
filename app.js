/* change the colour of the slider as you move it */
const slider = document.getElementById('q-4');
slider.oninput = function() {
  this.style.background = `linear-gradient(
    to right,
    #f99d27 0%,
    #f99d27 ${this.value * 10}%,
    #c1b9b1 ${this.value * 10}%,
    #c1b9b1 100%
  )`;
};

/* Form Validation */
/* DOM selection */
const questionOne = document.querySelectorAll('.q-1');
const questionTwo = document.querySelector('.q-2');
const questionThree = document.querySelectorAll('.q-3');
const questionFour = document.querySelectorAll('#q-4');
const form = document.querySelector('form');
const error = document.querySelectorAll('.error');

const valAlert = (errorNum, questionNum) => {
  error[errorNum].style.display = 'block';
  setTimeout(function() {
    error[errorNum].style.display = 'none';
  }, 4000);
  document.getElementById(questionNum).focus();
};

const validateForm = e => {
  if (
    questionOne[0].checked === false &&
    questionOne[1].checked === false &&
    questionOne[2].checked === false
  ) {
    e.preventDefault();
    valAlert(0, 'questionOne');
    return false;
  }
  if (questionTwo.value === '') {
    e.preventDefault();
    valAlert(1, 'questionTwo');
    return false;
  }
  if (
    questionThree[0].checked === false &&
    questionThree[1].checked === false &&
    questionThree[2].checked === false &&
    questionThree[3].checked === false &&
    questionThree[4].checked === false
  ) {
    e.preventDefault();
    valAlert(2, 'questionThree');
    return false;
  }
  return true;
};

window.onload = () => {
  /* Load querystrings on page load */
  function getURLParameter(name) {
    return (
      decodeURIComponent(
        (new RegExp(`[?|&]${name}=` + `([^&;]+?)(&|#|;|$)`).exec(
          location.search
        ) || [, ''])[1].replace(/\+/g, '%20')
      ) || null
    );
  }

  /* Question One */
  if (getURLParameter('q_1_option_1') === 'on') {
    questionOne[0].checked = true;
  }
  if (getURLParameter('q_1_option_2') === 'on') {
    questionOne[1].checked = true;
  }
  if (getURLParameter('q_1_option_3') === 'on') {
    questionOne[2].checked = true;
  }

  /* Question Two */
  questionTwo.value = getURLParameter('q_2_option_1');

  /* Question Three */
  if (getURLParameter('q_3_option_1') === 'on') {
    questionThree[0].checked = true;
  }
  if (getURLParameter('q_3_option_2') === 'on') {
    questionThree[1].checked = true;
  }
  if (getURLParameter('q_3_option_3') === 'on') {
    questionThree[2].checked = true;
  }
  if (getURLParameter('q_3_option_4') === 'on') {
    questionThree[3].checked = true;
  }
  if (getURLParameter('q_3_option_5') === 'on') {
    questionThree[4].checked = true;
  }

  /* Question Four */
  questionFour[0].value = getURLParameter('q_4_option_1');

  /* Set slider background to current value */
  if (getURLParameter('q_4_option_1') !== null) {
    slider.style.background = `linear-gradient(
          to right,
          #f99d27 0%,
          #f99d27 ${getURLParameter('q_4_option_1') * 10}%,
          #c1b9b1 ${getURLParameter('q_4_option_1') * 10}%,
          #c1b9b1 100%
        )`;
  }
};

/* Event Listener */
form.addEventListener('submit', validateForm);
