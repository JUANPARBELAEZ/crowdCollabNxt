import web3 from './web3';
// Added line
var artifacts = require('truffle-artifactor');
import CampaignCreator from "./build/contracts/CampaignCreator";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignCreator.interface),
  '0xE428ffF57ffA97379ab80c4aA9e67521431033ea');



export default instance;