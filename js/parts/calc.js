function calc() {
  let persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0;

  totalValue.innerHTML = 0;

  persons.addEventListener('change', function() {
    personsSum = +this.value;
    total = (daysSum + personsSum)*4000;

    if(restDays.value == '') {
      totalValue.innerHTML = 0;
    } else if (restDays.value !== '' && persons.value !== ''){
      totalValue.innerHTML = total;
    }
  });

  restDays.addEventListener('change', function() {
    daysSum = +this.value;
    total = (daysSum + personsSum)*4000;

    if(persons.value == '') {
      totalValue.innerHTML = 0;
    } else if (persons.value !== '' && restDays.value !== '') {
      totalValue.innerHTML = total;
    }
  });

  place.addEventListener('change', function() {
    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      let a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });
}

module.exports = calc;