// CONTROLLER

var GPIO = require('onoff').Gpio;
var colors = require('colors');
var led = new GPIO(4, 'out');

var ledState = process.argv[2];

var currentState = led.readSync();  //TODO: make this detection work.
console.log(colors.green('current state: ' + Number(currentState)));

ledControl(ledState, led);



// == FUNCTIONS ==
//turn LED on
function ledOn(obj){
    obj.writeSync(1);
}

//control LED with input
function ledControl(state, obj){
    if (Number(state) === 1) {
        obj.writeSync(1);
        console.log(colors.blue('light is ON!'));
    }
    else if (Number(state) === 0) {
        obj.writeSync(0);
        console.log(colors.red('light is OFF!'));
    }
    else {
        //if cases above don't match, keep current state
        obj.writeSync(currentState);
        console.log('Error: unknown command: ' + ledState);
    }
}
