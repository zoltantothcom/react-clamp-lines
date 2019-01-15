import * as React from 'react';

declare module 'react-clamp-lines' {
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

    declare class ClampLines extends React.Component<ClampLinesProps> { }
    export default ClampLines;
}