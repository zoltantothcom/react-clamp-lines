import React, {createElement, PureComponent} from 'react'
import PropTypes from 'prop-types'

const ELLIPSIS = '...'

class NanoClamp extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      noClamp: false,
      text: '.'
    }

    this.element = null
    this.original = props.text
    this.lineHeight = 0
    this.start = 0
    this.middle = 0
    this.end = 0
    this.debounced = this.debounce(this.action)
  }

  componentDidMount() {
    if (this.props.text) {
      this.lineHeight = this.element.clientHeight + 1
      this.clampLines()

      window.addEventListener('resize', this.debounced)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debounced)
  }

  debounce(func) {
    let timeout

    return () => {
      const context = this
      const later = () => {
        timeout = null
        func.apply(context)
      }
      const callNow = !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, 200)
      if (callNow) func.apply(context)
    }
  }

  action() {
    this.setState({noClamp: false}, this.clampLines)
  }

  clampLines() {
    this.setState({text: ''}, () => {
      const maxHeight = this.lineHeight * this.props.lines + 1

      this.start = 0
      this.middle = 0
      this.end = this.original.length

      while (this.start <= this.end) {
        this.middle = Math.floor((this.start + this.end) / 2)
        this.element.innerText = this.original.slice(0, this.middle)
        if (this.middle === this.original.length) {
          this.setState({
            text: this.original,
            noClamp: true
          })
          return
        }

        this.moveMarkers(maxHeight)
      }

      this.setState(
        () => {
          const slicedString = this.original.slice(0, this.middle - 5)
          const text = slicedString.trim() + ELLIPSIS
          return {
            text
          }
        },
        () => {
          this.element.innerText = this.state.text
        }
      )
    })
  }

  moveMarkers(maxHeight) {
    if (this.element.clientHeight <= maxHeight) {
      this.start = this.middle + 1
    } else {
      this.end = this.middle - 1
    }
  }

  render() {
    const {className, is, text: propText} = this.props
    const {text} = this.state

    if (!propText) {
      return null
    }

    const props = {
      className,
      ref: e => {
        this.element = e
      }
    }

    return createElement(is, props, text)
  }
}

NanoClamp.defaultProps = {
  className: '',
  is: 'div',
  lines: 3
}

NanoClamp.propTypes = {
  className: PropTypes.string,
  is: PropTypes.string,
  lines: PropTypes.number,
  text: PropTypes.string.isRequired
}

export default NanoClamp
