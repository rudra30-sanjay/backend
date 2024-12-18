export const applyForCampaign = async (req, res) => {
  const { campaignId } = req.body;
  try {
      // Add logic for applying to a campaign
      res.status(200).json({ message: 'Application successful' });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};
