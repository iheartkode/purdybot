"use strict";

// var _ = require("underscore");

var RoomData = require('../../data/RoomData'),
    TextLib = require('../utils/TextLib'),
    Utils= require('../utils/Utils'),
    AppConfig = require('../../config/AppConfig');

var _ = require('lodash-node');

var Rooms = {

    findByTopic: function(topic) {

        var rooms = RoomData.rooms().filter(function(rm) {
            var topics = rm.topics;
            if (!topics) {
                return false;
            }

            if (topics.indexOf(topic) !== -1) {
                return true;
            }
            return false;
        });

        return (this.checkRoom(rooms[0], 'findByTopic', topic));
    },

    // var rooms = GBot.roomList.filter(function(rm) {
    //     clog("checking room", rm.name + "==" + opts.roomObj.name);
    //     var match = (rm.name == opts.roomObj.name);
    //     if (match) {
    //         console.log("matched!")
    //         return true;
    //     }
    //     return false;
    // })

    findByName: function(name) {
        //DONT dashlib it as we want to keep slashe/s
        //name = TextLib.dashedName(name);
        var room = _.findWhere(RoomData.rooms(), {name: name});
        if(room) {return room;}
        //else
        Utils.error("cant find room name:", name);
    },

    names: function() {
        this.roomList = RoomData.rooms().map(function(room) {
            return room.name;
        });
        return this.roomList;
    },

    checkRoom: function(room, how, tag) {
        if (room) {
            return room;
        }
        Utils.error("Rooms.checkRoom> failed", how, tag);
        //return (RoomData.defaultRoom);  // careful, this is a property not a func
    }

};


module.exports = Rooms;
