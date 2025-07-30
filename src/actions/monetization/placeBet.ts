import { Request, Response } from 'express';

export const placeBet = (req: Request, res: Response) => {
  const { userId, matchId, side, amount } = req.body;
  if (amount > 0) {
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ success: false, reason: 'Invalid amount' });
  }
};