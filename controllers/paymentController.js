export const processPayout = async (req, res) => {
    const { influencerId, amount } = req.body;
    try {
        // Payment logic here
        res.status(200).json({ message: 'Payout processed successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
