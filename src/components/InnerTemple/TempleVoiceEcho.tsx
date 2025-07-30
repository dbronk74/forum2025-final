// src/components/InnerTemple/TempleVoiceEcho.tsx

import React, { useEffect, useRef, useState } from 'react';

const TempleVoiceEcho: React.FC = () => {
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);

  useEffect(() => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert('Audio recording is not supported in this browser.');
      return;
    }
  }, []);

  const startRecording = async () => {
    if (recording) return;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.current = new MediaRecorder(stream);
      audioChunks.current = [];

      mediaRecorder.current.addEventListener('dataavailable', (event) => {
        audioChunks.current.push(event.data);
      });

      mediaRecorder.current.addEventListener('stop', () => {
        const audioBlob = new Blob(audioChunks.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
      });

      mediaRecorder.current.start();
      setRecording(true);
    } catch (error) {
      alert('Microphone access denied or not available.');
    }
  };

  const stopRecording = () => {
    if (!recording || !mediaRecorder.current) return;
    mediaRecorder.current.stop();
    setRecording(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-zinc-900 rounded-lg shadow-lg text-white select-none text-center">
      <h3 className="text-xl font-semibold mb-4">Temple Voice Echo</h3>
      <button
        onClick={recording ? stopRecording : startRecording}
        className={`px-6 py-3 rounded-md font-semibold transition ${
          recording ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
        }`}
      >
        {recording ? 'Stop Recording' : 'Start Recording'}
      </button>
      {audioUrl && (
        <audio
          controls
          src={audioUrl}
          className="mt-4 w-full rounded-md outline-none"
        />
      )}
    </div>
  );
};

export default TempleVoiceEcho;
