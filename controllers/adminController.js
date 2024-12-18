export const approveCampaign = async (req, res) => {
  const { campaignId } = req.params;
  try {
      // Logic to approve campaign
      res.status(200).json({ message: 'Campaign approved' });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};
