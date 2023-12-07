import '@testing-library/jest-dom';

import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import ClampLines from './index';

describe('react-clamp-lines', function() {

  it('should unmount and avoid debounced setState', function() {
    jest.useFakeTimers();

    const originalConsoleError = console.error;
    console.error = jest.fn();

    const {unmount} = render(
      <ClampLines
        delay={300}
        id="safe-unmount"
        text="Long long text"
        lines={2}
        buttons={false}
      />
    )

    fireEvent(window, new Event("resize"));

    jest.advanceTimersByTime(100);

    unmount();

    jest.advanceTimersByTime(250);

    expect(console.error).not.toHaveBeenCalled();

    console.error = originalConsoleError;
    jest.useRealTimers();
  });
});
