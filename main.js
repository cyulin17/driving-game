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
  y: 0
};

function carMove() {
  carLocation.x += 10;
  $carBox.style.left = carLocation.x + 'px';

}

document.addEventListener('keydown', function (e) {

  if (e.key === ' ') {
    setInterval(carMove, 16);
  }
});
