import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCredits } from '../redux/slices/CreditLedgerSlice';

const AdEngagementTracker: React.FC<{ adUrl: string; adId: string }> = ({ adUrl, adId }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [watchPercentage, setWatchPercentage] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLIFrameElement | HTMLVideoElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const currentTime = (video as HTMLVideoElement).currentTime;
      const totalTime = (video as HTMLVideoElement).duration;
      setWatchPercentage((currentTime / totalTime) * 100);
      setDuration(currentTime);
    };

    const handleFocus = () => setIsPlaying(true);
    const handleBlur = () => setIsPlaying(false);

    video.addEventListener('timeupdate', handleTimeUpdate);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
    };
  }, []);

  useEffect(() => {
    if (watchPercentage >= 90) {
      dispatch(addCredits({ amount: 10, source: 'ad' }));
    }
  }, [watchPercentage, dispatch]);

  return (
    <div>
      <iframe
        ref={videoRef as React.RefObject<HTMLIFrameElement>}
        src={adUrl}
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; encrypted-media"
      />
      <p>Viewed: {watchPercentage}%</p>
    </div>
  );
};

export default AdEngagementTracker;