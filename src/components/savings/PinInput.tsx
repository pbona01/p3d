import React, { useState, useRef, useEffect } from 'react';

interface PinInputProps {
  length?: number;
  onComplete: (pin: string) => void;
}

export const PinInput: React.FC<PinInputProps> = ({ length = 4, onComplete }) => {
  const [pin, setPin] = useState(Array(length).fill(""));
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (isNaN(Number(value))) return;

    const newPin = [...pin];
    newPin[index] = value.substring(value.length - 1);
    setPin(newPin);

    if (value && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !pin[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    if (pin.every(digit => digit !== "")) {
      onComplete(pin.join(""));
    }
  }, [pin, onComplete]);

  return (
    <div className="flex gap-4">
      {pin.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputs.current[index] = el)}
          className="w-14 h-16 text-center text-2xl font-bold bg-black/60 border border-white/10 rounded-xl text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
        />
      ))}
    </div>
  );
};
