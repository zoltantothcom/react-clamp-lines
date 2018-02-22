import React, {Fragment} from 'react'
import {storiesOf} from '@storybook/react'
import NanoClamp from '../src/index'

const string =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, dignissimos totam nam cumque ipsum autem placeat. Doloribus nesciunt id saepe quasi, quod, quis voluptatibus rerum at perspiciatis impedit ab nostrum.'

const NanoClampWrap = ({background, is, lines, width}) => (
  <div
    style={{
      width,
      maxWidth: '100%',
      marginBottom: 25,
      padding: 20,
      fontFamily: 'Helvetica, Arial, sans-serif',
      fontSize: 14,
      lineHeight: '20px',
      background,
      color: 'white',
      boxSizing: 'border-box'
    }}
  >
    <NanoClamp text={string} lines={lines} is={is} />
  </div>
)

const examples = [
  {
    background: '#0984e3',
    key: 1,
    lines: 1,
    width: 500
  },
  {
    background: '#6c5ce7',
    key: 2,
    lines: 2,
    width: 370,
    is: 'p'
  },
  {
    background: '#e84393',
    key: 3,
    lines: 3,
    width: 270,
    is: 'blockquote'
  }
]

storiesOf('NanoClamp', module).add('default', () => (
  <Fragment>
    {examples.map(({...props}) => <NanoClampWrap {...props} />)}
  </Fragment>
))
