'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignCreator = require('./build/contracts/CampaignCreator');

var _CampaignCreator2 = _interopRequireDefault(_CampaignCreator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Added line
var artifacts = require('truffle-artifactor');


var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignCreator2.default.interface), '0xE428ffF57ffA97379ab80c4aA9e67521431033ea');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsImFydGlmYWN0cyIsInJlcXVpcmUiLCJDYW1wYWlnbkNyZWF0b3IiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFHakIsQUFBTyxBQUFxQjs7Ozs7O0FBRjVCO0FBQ0EsSUFBSSxZQUFKLEFBQUksQUFBWTs7O0FBR2hCLElBQU0sV0FBVyxJQUFJLGNBQUEsQUFBSyxJQUFULEFBQWEsU0FDNUIsS0FBQSxBQUFLLE1BQU0sMEJBREksQUFDZixBQUEyQixZQUQ3QixBQUFpQixBQUVmLEFBSUY7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIvcHJvamVjdHMvY3Jvd2RDb2xsYWJBcHAifQ==