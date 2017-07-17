# react-clamp-lines
Responsive clamping component with _&laquo;Read more&raquo;_/_&laquo;Read less&raquo;_ buttons built for [React](http://facebook.github.io/react/).

[**DEMO**](https://zoltantothcom.github.io/react-clamp-lines/)

## install
`npm install --save react-clamp-lines`

## features
 - built with and for `React`
 - option for _&laquo;Read more&raquo;_ and  _&laquo;Read less&raquo;_ buttons
 - customizable ellipsis text
 - customizable CSS classes
 - responsive
 - window resize event `debounced` &mdash; and [why it's important](https://davidwalsh.name/javascript-debounce-function)
>  If your web app uses JavaScript to accomplish taxing tasks, a **debounce** function is essential to ensuring a given task doesn't fire so often that it bricks browser performance.

## usage
```js
import React, { Component } from 'react';
import React-DOM from 'react-dom';
import ClampLines from '../ClampLines';

class App extends Component {
  render() {
    return (
      <div>
        <ClampLines
          text={text_to_clamp}
          lines="4"
          ellipsis="..."
          moreText="Expand"
          lessText="Collapse"
          className="custom-class" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('clamp'));
```

## API
```javascript
<ClampLines
    text={String}
    lines={Number}
    ellipsis={String}
    buttons={Boolean}
    moreText={String}
    lessText={String}
    className={String}
    debounce={Number} />
```
#### text
Text you wish to clamp.

#### lines
Number of visible lines.
**Default: `3`**

#### ellipsis
Text content for the ellipsis - will appear after the clamped lines.
**Default: `...`**

#### buttons
Should the  _&laquo;Read more&raquo;_ and  _&laquo;Read less&raquo;_ buttons appear.
**Default: `true`**

#### moreText
 _&laquo;Read more&raquo;_ button value.
**Default: `Read more`**

#### lessText
 _&laquo;Read less&raquo;_ button value.
**Default: `Read less`**

#### className
CSS class names added to main component.

#### debounce
Milliseconds, the function is waiting before being triggered, after it stops being called.
**Default: `300`**


## run the example
```bash
git clone https://github.com/zoltantothcom/react-clamp-lines.git
cd react-clamp-lines
npm install
npm start
```
then open [http://localhost:3000](http://localhost:3000)

## license
[Unlicense](http://unlicense.org)
