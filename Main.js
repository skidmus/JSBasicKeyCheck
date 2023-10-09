JSBKC = {};

JSBKC.keys = {};
JSBKC.keys.up = null;
JSBKC.keys.down = null;

function Runtime() {
    //Modules enabler/disabler
    document.addEventListener('keydown', (event)=> {
        if(event.code !== temple.keys.down) {
            JSBKC.keys.up = null;
            JSBKC.keys.down = event.code
        }
    });

    document.addEventListener('keyup', (event)=> {
        if(event.code !== temple.keys.up) {
            JSBKC.keys.down = null;
            JSBKC.keys.up = event.code
        }
    });
}

setInterval(Runtime, 5);

function IsKeyDown(key) {
    if(JSBKC.keys.down == key) {
        return true;
    }
}


function IsKeyUp(key) {
    if(JSBKC.keys.up == key) {
        return true;
    }
}
