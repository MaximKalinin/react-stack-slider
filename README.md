# React Stack Slider

Simple 3D image slider as a React component for modern browsers.

[Link to demo page](https://react-stack-slider.netlify.app/) with super heroes cards.

Requires react 16+.

## Basic Usage

The most basic usage is the following:

```jsx
// App.jsx
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

```jsx
<Slider Image="img" images={images} />
```

You can use normal component as `Image`:

```jsx
function Image({ src }) {
  return <div style={{ width: 200, height: 200, background: `url(${src}` }} />;
}

// later in render:
<Slider Image={Image} images={images} />;
```

**Note**, for the best user experiense `<Image>` component should be rendered with the same size for any `src` (for example, having fixed height and width or fixed aspect ratio). Let's say `<Image src={image[0]}>` renders an image of 200x200px. This means `<Image src={image[1]}>`, `<Image src={image[2]}>`, and others should render an image of 200x200px.

You still can use CSS `@media` rules to set sizes for different screens, but they should be the same for a given screen and all the images.

This is because `<Slider>` internally renders all the images with `position: absolute;` css property. This alone would make `<Slider>` to be of size 0. However, it renders one more `<Image>` element hidden from the user and with `position: static;`, which shapes the size of `<Slider>`.

## Slider API

This is TypeScript definition of the `<Slider>` props. It also applies to JavaScript usage:

```ts
import { ElementType, CSSProperties } from 'react';

export interface SliderProps {
  // Component to be rendered by Slider for each image. It can be either a intrisinc react element (such as "img") or function/class component, but it should accept "src" property as Slider will internally pass it on each render.
  Image: ElementType<{ src: string }>;
  // Array of image urls to be shown by sliderю
  images: string[];
  // Optional class name to apply to the root <div> element
  className?: string;
  // Optional styles to apply to the root <div> element
  style?: CSSProperties;
}
```

## Styling

Slider component is highly customizable in terms of styling. Initially, you can use `.react-stack-slider` class to target the root `<div>` element. If you want to style images itself, just create a react component with styles and pass it to the `<Slider>`:

```jsx
function Image({src}) {
  return <img src={src} className='custom-class-name' alt='alt'>;
}

<Slider Image={Image} images={images} />
```

If you want more advanced options, you can pass a `className` property to the `Slider` itself. It will concat your class name with `.react-stack-slider`. You can use `<Slider>` with `styled-components` or similar CSS-in-JS library:

```jsx
const FancySlider = styled(Slider)`
  background-color: palevioletred;
`;
```

You can also pass `style` object which is the same as React style object. It will be applied to the root `<div>` element.

## Contributing

- Fork the project
- Run the project in development mode: `yarn start`
- Start example with `cd example && yarn install && yarn start`
- Make changes
- Add appropriate tests
- `yarn test`
- Update README with appropriate docs.
- Commit using [conventional commits](https://www.conventionalcommits.org/) and make a PR

## License

MIT
