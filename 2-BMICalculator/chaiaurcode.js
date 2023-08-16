const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const result = document.querySelector('#result');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `plese give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `plese give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      result.innerHTML = `<span>It is Underweight ${bmi}</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      result.innerHTML = `<span>It is Normal Range ${bmi}</span>`;
    } else {
      result.innerHTML = `<span>It is Overweight ${bmi}</span>`;
    }
  }
});
