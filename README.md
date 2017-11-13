# alcorithm
Calculate the ABV % of a mixed drink

## usage

With known container volume:

``
let alcorithm = require('alcorithm');
alcorithm.withVolume(300, [{ abv: 40, volume: 30 }]);
``

Without known containter volume:

``
let alcorithm = require('alcorithm');
alcorithm.withouVolume([{ abv: 40, volume: 30, abv: 0, volume: 250 }]);
``