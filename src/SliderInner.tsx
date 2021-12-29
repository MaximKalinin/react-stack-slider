import React, {
  ReactNode,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
  Dispatch,
  SetStateAction,
  memo,
} from 'react';
import { unstable_batchedUpdates } from 'react-dom';
import { animation_time } from './const';
import { get_item } from './get_item';
import { IncomingEvent } from './types';
import { get_mouse_position } from './get_mouse_position';
import { SliderProps } from './';

interface SliderInnerProps extends Pick<SliderProps, 'Image' | 'images'> {
  progress_ref: MutableRefObject<number>;
  set_progress: Dispatch<SetStateAction<number>>;
  set_animate: Dispatch<SetStateAction<boolean>>;
}

export const SliderInner = memo(function SliderInner({
  Image,
  images,
  progress_ref,
  set_progress,
  set_animate,
}: SliderInnerProps) {
  const [current, set_current] = useState(0);
  const timeout_callback = useRef(() => {});
  const timeout_id = useRef(0);
  const ref = useRef<HTMLDivElement>(null);

  timeout_callback.current = () => {
    unstable_batchedUpdates(() => {
      if (progress_ref.current === 100 || progress_ref.current === -100) {
        set_current(old => old + 1 * Math.sign(progress_ref.current));
        set_progress(0);
      }

      set_animate(false);
    });
  };

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    function on_mouse_down(event: IncomingEvent) {
      const start_position = get_mouse_position(event);

      if (!start_position) return;

      event.preventDefault();

      function on_mouse_move(event: IncomingEvent) {
        const position = get_mouse_position(event);

        if (!position) return;

        event.preventDefault();

        set_progress(
          Math.max(-100, Math.min(100, position.x - start_position!.x))
        );
      }

      function on_mouse_up() {
        if ([-100, 0, 100].includes(progress_ref.current))
          timeout_callback.current();
        else {
          set_animate(true);

          set_progress(old_progress =>
            old_progress > 50 ? 100 : old_progress < -50 ? -100 : 0
          );

          timeout_id.current = window.setTimeout(
            timeout_callback.current,
            animation_time
          );
        }

        document.removeEventListener(
          'mousemove',
          on_mouse_move as any,
          {
            passive: false,
            capture: true,
          } as any
        );
        document.removeEventListener(
          'touchmove',
          on_mouse_move as any,
          {
            passive: false,
            capture: true,
          } as any
        );
      }

      document.addEventListener('mousemove', on_mouse_move, {
        passive: false,
        capture: true,
      });
      document.addEventListener('mouseup', on_mouse_up, { once: true });
      document.addEventListener('touchmove', on_mouse_move, {
        passive: false,
        capture: true,
      });
      document.addEventListener('touchend', on_mouse_up, { once: true });
    }

    element.addEventListener('mousedown', on_mouse_down, {
      passive: false,
      capture: true,
    });
    element.addEventListener('touchstart', on_mouse_down, {
      passive: false,
      capture: true,
    });

    return () => {
      element.removeEventListener(
        'mousedown',
        on_mouse_down as any,
        {
          passive: false,
          capture: true,
        } as any
      );
      element.removeEventListener(
        'touchstart',
        on_mouse_down as any,
        {
          passive: false,
          capture: true,
        } as any
      );
    };
  }, []);

  const elements: ReactNode[] = [];

  for (let index = 3; index >= -1; index--) {
    const src = get_item(images, current + index);
    elements.push(<Image key={`${index}${src}`} src={src} />);
  }

  return (
    <div className="Slider" ref={ref}>
      {elements}
      <Image src={images[0]} />
    </div>
  );
});
