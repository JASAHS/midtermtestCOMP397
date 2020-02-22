"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        //initialize and instatiate
        Play.prototype.Start = function () {
            //instantiate a new Text object
            // buttons
            this._diceroll01 = new objects.Button(config.Game.ASSETS.getResult("3"), 200, 240, true);
            this._diceroll02 = new objects.Button(config.Game.ASSETS.getResult("4"), 400, 240, true);
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            this.Main();
        };
        Play.prototype.Update = function () {
        };
        Play.prototype.Main = function () {
            var _this = this;
            this.addChild(this._diceroll01);
            this.addChild(this._diceroll02);
            this.addChild(this._rollButton);
            this._rollButton.on("click", function () {
                // let ranNum01=Math.floor(Math.random() * 6) + 1  ;
                // let ranNum02=Math.floor(Math.random() * 6) + 1  ;
                var ranNum01 = 2;
                var ranNum02 = 5;
                console.log(ranNum02);
                console.log(ranNum01);
                _this._diceroll01 = new objects.Button(config.Game.ASSETS.getResult(ranNum01), 200, 240, true);
                _this._diceroll02 = new objects.Button(config.Game.ASSETS.getResult(ranNum02), 400, 240, true);
            });
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map