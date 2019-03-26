import * as React from 'react';

export type ClampLinesProps = {
  text: string;
  lines?: number;
  ellipsis?: string;
  buttons?: boolean;
  moreText?: string;
  lessText?: string;
  className?: string;
  delay?: number;
  stopPropagation?: boolean;
};

declare const ClampLines: React.Component<ClampLinesProps>;

export default ClampLines;
