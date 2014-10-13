//////////////////////////
// KeySmithManager Class//
//////////////////////////

var KeySmithManager = function()
{    
    //Because JavaScript scoping with event handlers.
    var self = this;
    
    //"dictionary:" Key Code => Key Alias
    this.keyAliasLookup = {};
    
    //"dictionary:" Key Alias => Key Code
    //Needed for smoother deletes
    this.keyCodeLookup = {};
    
    ///////////////////////////
    //Event handler functions//
    ///////////////////////////
    
    this.onKeyDown = function(event)
    {
        var keyName = self.keyAliasLookup[event.keyCode];
        
        if(!keyName)
        {
            return;
        }
        
        self.dispatchKeyEvent(KeySmith.event.KEY_DOWN, event, keyName);
    }
    
    this.onKeyUp = function(event)
    {
        var keyName = self.keyAliasLookup[event.keyCode];
        
        if(!keyName)
        {
            return;
        }
        
        self.dispatchKeyEvent(KeySmith.event.KEY_UP, event, keyName);
    }
    
    this.onKeyPress = function(event)
    {
        var keyName = self.keyAliasLookup[event.keyCode];
        
        if(!keyName)
        {
            return;
        }
        
        self.dispatchKeyEvent(KeySmith.event.KEY_PRESS, event, keyName);
    }
    
    //common event dispatcher.
    this.dispatchKeyEvent = function(eventName, event, keyName)
    {
        //code used from http://stackoverflow.com/questions/2490825/how-to-trigger-event-in-javascript
        var newEvent;

        if(document.createEvent)
        {
            newEvent = document.createEvent("HTMLEvents");
            newEvent.initEvent(eventName, true, true);
        }
        else
        {
            newEvent = document.createEventObject();
            newEvent.eventType = eventName;
        }

        newEvent.eventName = eventName;
        newEvent.keyCode = event.keyCode;
        newEvent.keyName = keyName;

        if(!self.dispatcher)
        {
            self.dispatcher = document.getElementsByTagName('body')[0];
        }
        
        if(document.createEvent)
        {
            self.dispatcher.dispatchEvent(newEvent);
        }
        else
        {
            self.dispatcher.fireEvent("on" + newEvent.eventType, newEvent);
        }
    }
    
    addEventListener("keydown", this.onKeyDown);
    addEventListener("keyup", this.onKeyUp);
    addEventListener("keypress", this.onKeyPress);
}

KeySmithManager.prototype.registerKey = function(keyName, keyCode)
{
    this.keyAliasLookup[keyCode] = keyName;
    this.keyCodeLookup[keyName] = keyCode;
}

KeySmithManager.prototype.deregisterKey = function(keyName)
{
    var keyCode = this.keyCodeLookup[keyCode];
    
    if(!keyCode)
    {
        return;
    }
    
    this.keyAliasLookup[keyCode] = undefined;
    this.keyCodeLookup[keyName] = undefined;
}

///////////////////
//Event Constants//
///////////////////

KeySmithManager.event = {};

KeySmithManager.event.KEY_DOWN = "KeySmithDown";
KeySmithManager.event.KEY_UP = "KeySmithUp";
KeySmithManager.event.KEY_PRESS = "KeySmithPress";

var KeySmith = new KeySmithManager();
var ks = KeySmith;