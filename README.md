# color-generator

Generates colors based on the golden ratio, inspired by on Martin Ankerl's 
[blog post](http://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/).
It generates distinct colors that are more visually pleasing together than a simple random color generator
by moving around the color wheel in increments of the golden ratio. By default, the generated colors can 
easily be read as a background for black text by default, but the color generator can be customized for other uses.

Returns [color](https://github.com/harthur/color) objects so you can convert the colors to any colorspace
or CSS string representation easily.

## Example

```javascript
var gen = require('color-generator');

// see https://github.com/harthur/color for docs on conversions
gen().hexString() // '#BF79F2'
gen().rgbString() // 'rgb(242, 226, 121)'

// provide custom saturation and brightness
gen(0.8, 0.25).hexString() // '#0D1C40'
```

## License

MIT