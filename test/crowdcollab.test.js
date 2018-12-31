const CampaignCreator = artifacts.require("CampaignCreator");
const CrowdCollab = artifacts.require("CrowdCollab");

let campaignCreator;
let campaignAddress;
let campaign;

before(async () => {
    campaignCreator = await CampaignCreator.new()
    
    var minContribution = '1000000000000';
    var description = 'test CrowdCollab dApp';
    await campaignCreator.createCampaign(minContribution, description);
        
    campaignAddress = await campaignCreator.getCampaigns.call();
    
    campaign = await CrowdCollab.at(campaignAddress[0]);
});

c
