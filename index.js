var color = require('color');

// based on http://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
var hue = Math.random();
var goldenRatio = 0.618033988749895;

module.exports = function(saturation, value) {
  hue += goldenRatio;
  hue %= 1;
  
  if (typeof saturation !== "number")
    saturation = 0.5;
    
  if (typeof value !== "number")
    value = 0.95;
  
  return color({
    h: hue * 360,
    s: saturation * 100,
    v: value * 100
  });
};
