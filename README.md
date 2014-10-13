KeySmith.js v0.1
================

JavaScript Keyboard Manager and Aliasing tool

This tool allows you to listen for events based on names for keys, instead
of the key codes. This allows you to very easily customize controls.

Usage
=====

Use `KeySmith` (or `ks`) for all interactions with the manager.

Key Registration
----------------

KeySmith will only track keys that you have registered.

Registering a key:  
`KeySmith.registerKey(keyName, keyCode);`

Deregistering a key:  
`KeySmith.deregisterKey(keyName);`

Example usage:

    KeySmith.registerKey('up', 87); // w
    KeySmith.registerKey('down', 83); // s
    KeySmith.registerKey('left', 65); // a
    KeySmith.registerKey('right', 68); // d

KeySmith Events
---------------

KeySmith will listen and re-fire key events as KeySmith events. You can use
the predefined constants in `KeySmith.event`. Current events names are:

    KeySmith.event.KEY_PRESS
    KeySmith.event.KEY_DOWN
    KeySmith.event.KEY_UP

KeySmith custom events currently include the `eventName`, `keyCode`, and `keyName`.

Features
========

Current
-------

* Key Aliasing
* Custom events for registered keys

Planned
-------

* Key Constants
* Event Log
* Key state tracking

Known Issues
============

* Key Press doesn't fire based on key codes properly
    * keydown/keyup always fire with the capital key code.
    * keypress fires with the current key code ('a' normally, but 'A' if shift or caps lock is active).