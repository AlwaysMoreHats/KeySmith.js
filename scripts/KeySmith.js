//---------------------------
// KeySmith Class
//---------------------------

var KeySmith = function()
{    
    //"dictionary:" Key Code => Key Alias
    this.keyAliasLookup = {};
    
    //"dictionary:" Key Alias => Key Code
    //Needed for smoother deletes
    this.keyCodeLookup = {};
    
    addEventListener("keydown", this.onKeyDown);
    addEventListener("keyup", this.onKeyUp);
    addEventListener("keypress", this.onKeyPress);
}

KeySmith.prototype.registerKey = function(keyName, keyCode)
{
    this.keyAliasLookup[keyCode] = keyName;
    this.keyCodeLookup[keyName] = keyCode;
}

KeySmith.prototype.deregisterKey = function(keyName)
{
    var keyCode = this.keyCodeLookup[keyCode];
    
    if(!keyCode)
    {
        return;
    }
    
    keyAliasLookup[keyCode] = undefined;
    keyCodeLookup[keyName] = undefined;
}

KeySmith.prototype.onKeyDown = function(event)
{
    console.log("Key Down", event.keyCode);
}

KeySmith.prototype.onKeyUp = function(event)
{
    console.log("Key Up", event.keyCode);
}

KeySmith.prototype.onKeyPress = function(event)
{
    console.log("Key Press", event.keyCode);
}

KeySmith.event = {};

KeySmith.event.KEY_DOWN = "onKeySmithDown";
KeySmith.event.KEY_UP = "onKeySmithUp";
KeySmith.event.KEY_PRESS = "onKeySmithPress";


var KeyEvent = function (keySmithKey, event)
{
    this.keyName = keySmithKey;
    this.keyCode = event.keyCode;
    this.eventType = event.type;
    this.timestamp = Date.now();
}