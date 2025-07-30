import { Request, Response } from 'express';
import { addCredits } from '../../redux/slices/CreditLedgerSlice';

export const trackAd = (req: Request, res: Response) => {
  const { userId, adId, watchDuration, valid } = req.body;
  if (valid && watchDuration >= 90) {
    addCredits({ amount: 10, source: 'ad' });
    res.status(200).json({ success: true, creditsAdded: 10 });
  } else {
    res.status(400).json({ success: false, reason: 'Invalid ad view' });
  }
};