//Set variables
var JSBKC = {};

JSBKC.keys = {};
JSBKC.keys.up = null;
JSBKC.keys.down = null;

//Check if key down
document.addEventListener('keydown', Downcheck);

//Check if key up
document.addEventListener('keyup', Upcheck);

function Downcheck() {
    if(event.code !== JSBKC.keys.down) {
        JSBKC.keys.up = null;
        JSBKC.keys.down = event.code;
    }
}

function Upcheck() {
    if(event.code !== JSBKC.keys.up) {
        JSBKC.keys.down = null;
        JSBKC.keys.up = event.code;
    }
}
//functions
function IsKeyDown(key) {
    if(JSBKC.keys.down == key) {
        JSBKC.keys.down = null;
        return true;
    }
}


function IsKeyUp(key) {
    if(JSBKC.keys.up == key) {
        JSBKC.keys.up = null;
        return true;
    }
}
