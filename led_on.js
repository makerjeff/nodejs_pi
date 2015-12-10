var GPIO = require('onoff').Gpio;
var colors = require('colors');
var led = new GPIO(4, 'out');

//functions
function ledOn(obj){
    obj.writeSync(1);
}

ledOn(led);
console.log(colors.green('Lights ON!'));