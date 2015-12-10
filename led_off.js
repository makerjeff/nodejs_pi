var GPIO = require('onoff').Gpio;
var colors = require('colors');
var led = new GPIO(4, 'out');

//functions
function ledOn(obj){
    obj.writeSync(0);
}

ledOn(led);
console.log(colors.rainbow('Lights OFF!'));