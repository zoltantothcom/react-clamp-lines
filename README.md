# react-clamp-lines

![npm](https://img.shields.io/npm/dm/react-clamp-lines.svg) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/react-clamp-lines.svg)

Responsive and accessible clamping component with _&laquo;Read more&raquo;_/_&laquo;Read less&raquo;_ buttons built for [React](http://facebook.github.io/react/).

![react-clamp-lines](react-clamp.png 'react-clamp-lines')

## Demo

[**React Clamp Lines**](https://stackblitz.com/edit/react-clamp-lines)

## Install

`npm i react-clamp-lines`

## Features

- built for `React` with no dependencies
- option for _&laquo;Read more&raquo;_ and _&laquo;Read less&raquo;_ buttons
- customizable ellipsis text
- customizable CSS classes
- responsive
- accessible
- window resize event `debounced` &mdash; and [why it's important](https://davidwalsh.name/javascript-debounce-function)
  > If your web app uses JavaScript to accomplish taxing tasks, a **debounce** function is essential to ensuring a given task doesn't fire so often that it bricks browser performance.

## Usage

```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ClampLines from 'react-clamp-lines';

class App extends Component {
  render() {
    return (
      <ClampLines
        text={text_to_clamp}
        lines={4}
        ellipsis="..."
        moreText="Expand"
        lessText="Collapse"
        className="custom-class"
        innerElement="p"
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('clamp'));
```

The component and the or _&laquo;Read more&raquo;_ button always have the `clamp-lines` and `clamp-lines__button` CSS classes respectively. In the example above the `custom-class` will be added to `clamp-lines`, so the output will be:

```html
<div class="clamp-lines custom-class">
  <p>clamped text here...</p>
  <button class="clamp-lines__button">Expand</button>
</div>
```

## API

List of all available props with their default values and description.

```javascript
<ClampLines
  text={String}
  lines={Number}
  ellipsis={String}
  buttons={Boolean}
  moreText={String}
  lessText={String}
  className={String}
  delay={Number}
  stopPropagation={Boolean}
  innerElement={String}
/>
```

| prop            | type      | default&#160;value | description                                                                                           |
| --------------- | --------- | ------------------ | ----------------------------------------------------------------------------------------------------- |
| text            | {String}  |                    | Text you wish to clamp                                                                                |
| lines           | {Number}  | `3`                | Number of visible lines                                                                               |
| ellipsis        | {String}  | `...`              | Text content for the ellipsis - will appear after the clamped lines                                   |
| buttons         | {Boolean} | `true`             | The _&laquo;Read more&raquo;_ and _&laquo;Read less&raquo;_ buttons                                   |
| moreText        | {String}  | `Read more`        | _&laquo;Read more&raquo;_ button value                                                                |
| lessText        | {String}  | `Read less`        | _&laquo;Read less&raquo;_ button value                                                                |
| className       | {String}  |                    | CSS class names added to component                                                                    |
| delay           | {Number}  | `300`              | Milliseconds, the function is waiting before being triggered, after it stops being called             |
| stopPropagation | {Boolean} | `false`            | Prevents the event from bubbling up the DOM tree when clicked on the _&laquo;Read more&raquo;_ button |
| innerElement    | {String}  | `div`              | Custom inner element for clamped text. **This MUST be a [block level element](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements#Elements) or styled as one.**

## License

Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.

See [Unlicense](http://unlicense.org) for full details.
