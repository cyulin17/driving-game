var $car = document.querySelector('img');

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
