import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { head } from './const';
import { get_style } from './get_style';
import { ImageComponent } from './types';
import { SliderInner } from './SliderInner';

export interface SliderProps {
  Image: ImageComponent;
  images: string[];
}

export function Slider(props: SliderProps) {
  const [progress, set_progress] = useState(0);
  const [animate, set_animate] = useState(false);
  const progress_ref = useRef(0);
  progress_ref.current = progress;

  return (
    <>
      <SliderInner
        progress_ref={progress_ref}
        set_progress={set_progress}
        set_animate={set_animate}
        {...props}
      />
      {createPortal(<style>{get_style(progress, animate)}</style>, head)}
    </>
  );
}
