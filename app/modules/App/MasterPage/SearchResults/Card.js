import React from 'react';

import { cardImage, cardTitle, root } from './Card.scss';

import placeholder from 'assets/images/placeholder.png';

const Card = ({ name, imageUrl }) => (
	<div className={root}>
		<img className={cardImage} src={imageUrl ? imageUrl : placeholder} />
		<p className={cardTitle}>{name}</p>
	</div>
);

export { Card };
