import { Card } from '@/types/types';
import React from 'react';

interface CardProps {
  items: Card[];
  onClick?: () => void;
}

const Card = ({ items, onClick }: CardProps) => {
  return (
    <>
      {items.map((item: Card) => (
        <div 
            className="flex flex-col gap-4 bg-blue-300 rounded-lg h-40 w-full items-center justify-center hover:bg-red-400 shadow-sm shadow-black"
            onClick={onClick}
        >
          <div>{item.id}</div>
          <div className="font-semibold">{item.name}</div>
        </div>
      ))}
    </>
  );
};

export default Card;
