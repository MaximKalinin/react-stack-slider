# React Stack Slider

Simple 3D image slider as a React component.

[Link to demo page](https://react-stack-slider.netlify.app/) with super heroes cards.

Requires react 16+.

## Basic Usage

The most basic usage is the following:

```jsx
// App.js
import {Slider} from 'react-stack-slider';

const images = [
  'https://picsum.photos/200/300?random=1',
  'https://picsum.photos/200/300?random=2',
  'https://picsum.photos/200/300?random=3',
  'https://picsum.photos/200/300?random=4',
];

export default App() {
  return <Slider Image="img" images={images} />;
}
```

## Instalation

```bash
npm install react-stack-slider
```

or

```bash
yarn add react-stack-slider
```

## Exports

```js
// ES6
import { Slider } from 'react-stack-slider';

// CommonJS
let Slider = require('react-draggable').Slider;
```

## `<Slider>`

`<Slider>` renders a `<div>` and passes images from array as `src` property to `<Image>` component.

## Slider API

```ts
interface SliderProps {
  // Component to be rendered by Slider for each image. It can be either a intrisinc react element (such as "img") or function/class component, but it should accept "src" property as Slider will internally pass it on each render.
  Image: ImageComponent;
  // Array of image urls to be shown by sliderю
  images: string[];
}
```

## Contributing

- Fork the project
- Run the project in development mode: `yarn start`
- Start example with `cd example && yarn install && yarn start`
- Make changes
- Add appropriate tests
- `yarn test`
- Update README with appropriate docs.
- Commit using [conventional commits](https://www.conventionalcommits.org/) and make a PR
