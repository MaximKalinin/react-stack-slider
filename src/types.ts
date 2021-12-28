export type IncomingEvent = MouseEvent | TouchEvent;

export interface Position {
  x: number;
  y: number;
}

export interface ImageComponentProps {
  src: string;
}

export type ImageComponent = (props: ImageComponentProps) => JSX.Element;
