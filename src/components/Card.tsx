import '../styles/Card.css';
import React from 'react';

interface ICard {
  children?: React.ReactNode;
  className?: string;
}

function Card({ className, children }: ICard) {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  )
}

export default Card