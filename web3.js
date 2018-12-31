const CampaignCreator = require("./build/contracts/CampaignCreator");
const CrowdCollab = require("./build/contracts/CrowdCollab");


import Web3 from 'web3';
let web3;
//var HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = 'same photo stock joy dial escape midnight hello point blanket world mercy';
//const provider = new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q');

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    web3 = new Web3(window.web3.currentProvider);
} else {
    var provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q');
    
    web3 = new Web3(provider);
}

export default web3;
