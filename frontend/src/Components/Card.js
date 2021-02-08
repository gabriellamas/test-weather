import React from 'react';
import { card, container } from './styles.module.css';

const Card = ({ children, className = '' }) => (
  <div className={card}>
    <div className={`${container} ${className}`}>{children}</div>
  </div>
);

export default Card;
