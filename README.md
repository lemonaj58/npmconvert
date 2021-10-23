# Foobar

Conversion is used for converting measurments. current conversions include;
* feet
* miles
* kilometers
* meters
* milimeters

## Installation

use npm, and use npm install npmconvert
```bash
npm install npmconvert
```

## Usage for nodeJS

```javascript
//for nodeJS backend
let Conversions = require('./lib/index.js')
Conversions.milesToKM(1) //1.61
Conversions.milesToKM(1, 0) //2

//for ES5 front end
import Conversions from './dist/index.js'
Conversions.milesToKM(1) //1.61
Conversions.milesToKM(1, 0) //2
```

## License
[MIT](https://choosealicense.com/licenses/mit/)