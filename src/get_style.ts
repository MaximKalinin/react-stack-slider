import { sensitivity, animation_time, class_name } from './const';

export function get_style(progress: number, animate: boolean) {
  return `
.${class_name} {
    display: inline-flex;
    position: relative;
    justify-content: center;
}

.${class_name} > * {
    position: absolute;
    bottom: -10%;
    transition: ${
      animate
        ? `transform ${animation_time}ms ease-out, opacity ${animation_time}ms ease-out`
        : 'none'
    };
}

.${class_name} > *:last-child {
    position: static;
    visibility: hidden;
    pointer-events: none;
}

.${class_name} > *:nth-child(1) {
    opacity: ${progress / 100};
    transform: scale(0.8) scale(${0.4 + (0.2 * progress) / 100}) 
    translate(0, -${130 - progress * 0.6}%);
}

.${class_name} > *:nth-child(2) {
    opacity: ${1 + progress / 100};
    transform: scale(0.8) scale(${0.6 + (0.2 * progress) / 100}) 
    translate(0, -${70 - progress * (progress > 0 ? 0.4 : 0.6)}%);
}

.${class_name} > *:nth-child(3) {
    transform: scale(0.8) scale(${0.8 + (0.2 * progress) / 100}) 
    translate(0, -${30 - progress * (progress > 0 ? 0.3 : 0.4)}%);
}

.${class_name} > *:nth-child(4) {
    opacity: ${1 - progress / 100};
    transform: scale(0.8) ${
      progress >= 0
        ? `translate(${progress / sensitivity}px, 0)`
        : `scale(${1 + (0.2 * progress) / 100}) translate(0, ${progress *
            0.3}%)`
    };
}

.${class_name} > *:nth-child(5) {
    opacity: ${-progress / 100};
    transform: scale(0.8) ${
      progress >= 0
        ? `translate(${100 / sensitivity}px, 0)`
        : `translate(${(100 + progress) / sensitivity}px, 0)`
    };
    display: ${progress === 0 && !animate ? 'none' : 'initial'};
}`;
}
