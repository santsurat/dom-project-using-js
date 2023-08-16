const button = document.querySelectorAll('.button');

const body = document.querySelector('body');

button.forEach((button) => {
  button.addEventListener('click', function (e) {
    document.querySelector('body').style.backgroundColor = `${e.target.id}`;
    document.querySelector('h1').style.color = 'black';
    // switch (e.target.id) {
    //   case 'grey':
    //     body.style.backgroundColor = e.target.id;
    //     break;

    //   case 'white':
    //     body.style.backgroundColor = e.target.id;
    //     break;

    //   case 'blue':
    //     body.style.backgroundColor = e.target.id;
    //     break;

    //   case 'yellow':
    //     body.style.backgroundColor = e.target.id;
    //     break;

    //   default:
    //     body.style.backgroundColor = 'white';
    // }
  });
});
