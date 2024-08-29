import React, { useRef, useEffect } from 'react';

const Player = ({
  activeSong,
  isPlaying,
  volume,
  seekTime,
  onEnded,
  onTimeUpdate,
  onLoadedData,
  repeat
}) => {
  const ref = useRef(null);

  // Debugging: Check if component is rendering
  useEffect(() => {
    console.log('Player component rendered');
  });

  useEffect(() => {
    console.log('activeSong:', activeSong, isPlaying);
  }, [activeSong, isPlaying, volume, seekTime]);

  useEffect(() => {
    if (ref.current) {
      console.log('Audio element mounted:', ref.current);

      if (isPlaying) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }
  }, [isPlaying, activeSong]);

  useEffect(() => {
    if (ref.current) {
      ref.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (ref.current && seekTime >= 0) {
      ref.current.currentTime = seekTime;
    }
  }, [seekTime]);

  return (
    <audio
      src={activeSong?.attributes?.previews[0].url}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
      controls
    />
  );
};

export default Player;
