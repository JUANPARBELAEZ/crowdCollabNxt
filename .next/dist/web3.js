"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CampaignCreator = require("./build/contracts/CampaignCreator");
var CrowdCollab = require("./build/contracts/CrowdCollab");

var web3 = void 0;
//var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = 'same photo stock joy dial escape midnight hello point blanket world mercy';
//const provider = new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q');

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q');

    web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYjMuanMiXSwibmFtZXMiOlsiQ2FtcGFpZ25DcmVhdG9yIiwicmVxdWlyZSIsIkNyb3dkQ29sbGFiIiwiV2ViMyIsIndlYjMiLCJtbmVtb25pYyIsIndpbmRvdyIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFJQSxBQUFPOzs7Ozs7QUFKUCxJQUFNLGtCQUFrQixRQUF4QixBQUF3QixBQUFRO0FBQ2hDLElBQU0sY0FBYyxRQUFwQixBQUFvQixBQUFROztBQUk1QixJQUFJLFlBQUo7QUFDQTtBQUNBLElBQU0sV0FBTixBQUFpQjtBQUNqQjs7QUFFQSxJQUFJLE9BQUEsQUFBTyxXQUFQLEFBQWtCLGVBQWUsT0FBTyxPQUFQLEFBQWMsU0FBbkQsQUFBNEQsYUFBYSxBQUNyRTtXQUFPLEFBQUksa0JBQUssT0FBQSxBQUFPLEtBQXZCLEFBQU8sQUFBcUIsQUFDL0I7QUFGRCxPQUVPLEFBQ0g7UUFBSSxXQUFXLElBQUksY0FBQSxBQUFLLFVBQVQsQUFBbUIsYUFBbEMsQUFBZSxBQUNmLEFBRUE7O1dBQU8sQUFBSSxrQkFBWCxBQUFPLEFBQVMsQUFDbkI7QUFFRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0cy9jcm93ZENvbGxhYkFwcCJ9