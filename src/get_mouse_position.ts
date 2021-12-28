import { IncomingEvent, Position } from './types';

export function get_mouse_position(event: IncomingEvent): Position | null {
  if ('touches' in event && event.touches[0])
    return { x: event.touches[0].clientX, y: event.touches[0].clientY };

  if ('button' in event)
    return event.button !== 0 ? null : { x: event.clientX, y: event.clientY };

  return null;
}
