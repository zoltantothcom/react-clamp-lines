# nanoclamp
Responsive text clamping component.

## Install
`npm install nanoclamp --save`

## Features
 - built for `React` with no dependencies
 - customizable CSS classes
 - responsive
 - window resize event `debounced` &mdash; and [why it's important](https://davidwalsh.name/javascript-debounce-function)

## Usage
```js
import NanoClamp from 'nanoclamp';

...

<NanoClamp
  text={'Some text to clamp.'}
  lines="4"
  className="custom-class"
/>

```

## API

prop | type | default&#160;value | description |
-----|------|--------------------|-------------|
text | `string` |  | Text you wish to clamp
lines | `number` | `3` | Number of visible lines
className | `string` |  | CSS class names added to component

## License

**nanoclamp** © [Microlink](https://microlink.io), Released under the [MIT](https://github.com/microlinkhq/nanoclamp/blob/master/LICENSE.md) License.<br>
Adapted from [`react-clamp-lines`](https://github.com/zoltantothcom/react-clamp-lines) by Brad Adams with help from [contributors](https://github.com/microlinkhq/nanoclamp/contributors).

> [microlink.io](https://microlink.io) · GitHub [@MicrolinkHQ](https://github.com/microlinkhq) · Twitter [@microlinkhq](https://twitter.com/microlinkhq)
