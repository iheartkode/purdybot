"use strict";

require('dotenv').config({path: 'dot.env'});

var assert = require("chai").assert,
    expect = require("chai").expect;

var GBot = require("../lib/bot/GBot.js"),
    Utils = require("../lib/utils/Utils"),
    TestHelper = require("./TestHelper"),
    KBase = require("../lib/bot/KBase.js");

function clog(msg, obj) {
    Utils.warn("KbaseSpec>", msg, obj);
}


// "no-unused-expressions": [0]


describe("IO", function () {

    //it("should load the KBase", function() {
    //    var p = KBase.initSync();
    //});

    it("command: help", function () {
        var res, msg;
        msg = TestHelper.makeMessageFromString("help");
        res = GBot.findAnyReply(msg);
        expect(res).to.include("Hi I\'m **[CamperBot]");
    });

});

