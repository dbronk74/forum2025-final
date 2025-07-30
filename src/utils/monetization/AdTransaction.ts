import mongoose, { Document, Schema } from 'mongoose';

export interface IAdTransaction extends Document {
  userId: string;
  adId: string;
  earnedCredits: number;
  durationWatched: number;
  timestamp: Date;
  wasValid: boolean;
}

const AdTransactionSchema: Schema = new Schema({
  userId: { type: String, required: true },
  adId: { type: String, required: true },
  earnedCredits: { type: Number, required: true },
  durationWatched: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
  wasValid: { type: Boolean, required: true },
});

export default mongoose.model<IAdTransaction>('AdTransaction', AdTransactionSchema);