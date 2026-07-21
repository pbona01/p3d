import { useState, useEffect } from 'react';
import { SavingsBox } from '../types/savings';
import { getBox, saveBox } from '../lib/savings-utils';

export const useSavingsBox = (boxId: string) => {
  const [box, setBox] = useState<SavingsBox | null>(null);

  useEffect(() => {
    const fetched = getBox(boxId);
    setBox(fetched);
  }, [boxId]);

  const updateBox = (newBox: SavingsBox) => {
    saveBox(newBox);
    setBox(newBox);
  };

  return { box, updateBox };
};
