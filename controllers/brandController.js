export const getCampaignInsights = async (req, res) => {
    try {
        // Logic to fetch insights
        res.status(200).json({ message: 'Insights fetched successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
