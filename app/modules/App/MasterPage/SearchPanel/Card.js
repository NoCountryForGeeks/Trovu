import React from 'react';

import { cardImage, placeholder, cardTitle, root } from './Card.scss';

const Card = props => (
	<div className={root}>
		<div className={placeholder}>
			<img className={cardImage} src={props.imageUrl} />
		</div>
		<p className={cardTitle}>{props.name}</p>
	</div>
);

export { Card };
