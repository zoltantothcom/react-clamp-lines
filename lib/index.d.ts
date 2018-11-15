import * as React from 'react';

declare namespace ClampLines {
    export interface ClampLinesProps {
        buttons?: boolean;
        className?: string;
        debounce?: number;
        delay?: number;
        ellipsis?: string;
        lessText?: string;
        lines?: number;
        moreText?: string;
        text: string;
    }
}

declare class ClampLines extends React.Component<ClampLines.ClampLinesProps> { }

export = ClampLines;
