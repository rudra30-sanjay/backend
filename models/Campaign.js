import mongoose from 'mongoose';

const campaignSchema = mongoose.Schema(
  {
    brand: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    adContent: { type: String, required: true },
    budget: { type: Number, required: true },
    cpf: { type: Number, required: true },
    maxInfluencers: { type: Number, default: 10 },
    status: { type: String, enum: ['pending', 'approved', 'completed'], default: 'pending' },
    targetingOptions: {
      niche: { type: String },
      location: { type: String },
    },
  },
  { timestamps: true }
);

const Campaign = mongoose.model('Campaign', campaignSchema);
export default Campaign;
