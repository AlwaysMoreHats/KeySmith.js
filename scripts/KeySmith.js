//---------------------------
// KeySmith Class
//---------------------------

var KeySmith = function()
{
    //keeps track of previous key events
    //stores KeyEvent (keyName, eventType, timestamp)
    this.eventLog = []; //used like queue (pop => enqueue, shift = dequeue)
    
    //clear after 30 events
    //will likely change later to time based
    this.eventLogMaximum = 30;
    
    //"dictionary:" Key Code => Key Alias
    this.keyAliasLookup = {};
    
    //"dictionary:" Key Alias => Key Code
    //Needed for smoother deletes
    this.keyCodeLookup = {};
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