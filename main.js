var $car = document.querySelector('img');
var $carBox = document.querySelector('.car');

var carDirections = [
  {
    key: 'ArrowRight',
    direction: 'right'
  },

  {
    key: 'ArrowDown',
    direction: 'down'
  },

  {
    key: 'ArrowLeft',
    direction: 'left'
  },

  {
    key: 'ArrowUp',
    direction: 'up'
  }
];

document.addEventListener('keydown', function (e) {

  for (var i = 0; i < carDirections.length; i++) {
    if (e.key === carDirections[i].key) {
      $car.className = carDirections[i].direction;
    }
  }

});

var carLocation = {
  x: 0,
  y: 0,
  carStarted: false
};

function carMove() {
  carLocation.x += 10;
  $carBox.style.left = carLocation.x + 'px';

}

var timer;
document.addEventListener('keydown', function (e) {

  if (e.key === ' ') {
    if (carLocation.carStarted === false) {
      carLocation.carStarted = true;
      timer = setInterval(carMove, 16);
    } else {
      carLocation.carStarted = false;
      clearInterval(timer);
    }
  }
});
