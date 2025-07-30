// server/routes/forumTubeRoutes.ts
import express from 'express';
import { getVerseById, uploadVerse } from '../controllers/forumTubeController';

const router = express.Router();

router.get('/verses/:id', getVerseById);
router.post('/verses', uploadVerse);

export default router;
