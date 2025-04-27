import { useState } from 'react';
import { useAudioContext } from './useAudioContext';
import { generateChordProgression } from '@/lib/chordGenerator';

export const useTrackAudio = () => {
  const { context } = useAudioContext();
  const [isPlaying, setIsPlaying] = useState(false);
  const [buffers, setBuffers] = useState<Record<string, AudioBuffer>>({});
  const trackGainNodes: Record<string, GainNode> = {};
  const masterGain = context?.createGain();

  const play = () => {
    context?.resume();
    setIsPlaying(true);
  };

  const pause = () => {
    context?.suspend();
    setIsPlaying(false);
  };

  const setGain = (track: string, value: number) => {
    if (trackGainNodes[track]) {
      trackGainNodes[track].gain.value = value;
    }
  };

  const generateTrack = async () => {
    if (!context) return;

    console.log('Generating track...');

    // Example static samples (in /public/samples/)
    const sampleUrls = {
      guitar: '/samples/guitar/rock1.wav',
      bass: '/samples/bass/rock1.wav',
      keys: '/samples/keys/rock1.wav',
      drums: '/samples/drums/rock1.wav',
    };

    for (const [instrument, url] of Object.entries(sampleUrls)) {
      const res = await fetch(url);
      const arrayBuffer = await res.arrayBuffer();
      const audioBuffer = await context.decodeAudioData(arrayBuffer);

      const source = context.createBufferSource();
      const gainNode = context.createGain();

      source.buffer = audioBuffer;
      source.loop = true;

      source.connect(gainNode).connect(masterGain!).connect(context.destination);

      trackGainNodes[instrument] = gainNode;
      source.start();
    }

    const chords = generateChordProgression('rock', 4);
    console.log('Generated Chords:', chords);
  };

  return { generateTrack, play, pause, isPlaying, setGain, masterGain, trackGainNodes };
};
