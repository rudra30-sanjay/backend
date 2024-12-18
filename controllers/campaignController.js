import Campaign from '../models/Campaign.js';

export const createCampaign = async (req, res) => {
    const { title, content, budget, cpf, maxInfluencers, target } = req.body;
    try {
        const campaign = await Campaign.create({
            brand: req.user._id,
            title,
            content,
            budget,
            cpf,
            maxInfluencers,
            target,
        });
        res.status(201).json(campaign);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getCampaigns = async (req, res) => {
    try {
        const campaigns = await Campaign.find({});
        res.json(campaigns);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
