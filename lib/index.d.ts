import * as React from 'react';

export interface ClampLinesProps {
	text: string;
	id: string;
	type: 'html' | 'text';
	lines?: number;
	ellipsis?: string;
	buttons?: boolean;
	moreText?: string;
	lessText?: string;
	className?: string;
	delay?: number;
	stopPropagation?: boolean;
	innerElement?: string;
}

declare class ClampLines extends React.Component<ClampLinesProps> {}

export default ClampLines;
