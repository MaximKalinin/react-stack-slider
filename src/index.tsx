import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { head } from './const';
import { get_style } from './get_style';
import { ImageComponent } from './types';
import { SliderInner } from './SliderInner';

export interface SliderProps {
  /**
   * Component to be rendered by Slider for each image. It can be either a intrisinc
   * react element (such as "img") or function/class component, but it should accept
   * "src" property as Slider will internally pass it on each render
   */
  Image: ImageComponent;
  /**
   * Array of image urls to be shown by slider
   */
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
