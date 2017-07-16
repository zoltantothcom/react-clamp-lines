import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import ClampLines from './ClampLines';
import './styles.css';

let ipsum = {
  text_1: 'Spicy jalapeno bacon ipsum dolor amet drumstick sirloin chuck shankle. Flank ribeye pancetta andouille ham hock. Turkey cow tenderloin landjaeger filet mignon hamburger. Pig tail strip steak pastrami t-bone venison bresaola biltong corned beef drumstick pork hamburger tri-tip. Tongue ham hock corned beef tri-tip meatball t-bone fatback andouille sirloin chuck jowl biltong pastrami. Ham hock ground round landjaeger tail strip steak. Ham sirloin pork loin salami spare ribs. Jerky cow short ribs ground round. Hamburger porchetta shankle meatloaf shank.',
  text_2: 'Spicy jalapeno bacon ipsum dolor amet drumstick sirloin chuck shankle. Flank ribeye pancetta andouille ham hock. Turkey cow tenderloin landjaeger filet mignon hamburger.',
};

class App extends PureComponent {
  render() {
    return (
      <div className="container">
        <h3>1. Default</h3>
        <pre><code>{`<ClampLines text={text_to_clamp} />`}</code></pre>

        <ClampLines text={ipsum.text_1} />

        <h3>2. Custom button labels, custom ellipsis and custom CSS class</h3>
        <pre><code>{`<ClampLines
  text={text_to_clamp}
  lines="4"
  moreText="Expand"
  lessText="Collapse"
  className="custom-class"
  ellipsis="_ _" />`}</code></pre>

        <ClampLines
          text={ipsum.text_1}
          lines="4"
          moreText="Expand"
          lessText="Collapse"
          className="custom-class"
          ellipsis="_ _" />

        <h3>3. No buttons and increased debounce delay</h3>
        <pre><code>{`<ClampLines
  text={text_to_clamp}
  buttons={false}
  delay="900" />`}</code></pre>

        <ClampLines
          text={ipsum.text_1}
          buttons={false}
          delay="900" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('clamp'));
