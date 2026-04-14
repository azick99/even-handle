import { useState } from 'react';

export const KeyboardExample = () => {
  const [items, setItems] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  // ✅ KeyboardEvent for key presses
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.key);        // "Enter", "a", "Backspace" etc.
    console.log(e.code);       // "Enter", "KeyA", etc.
    console.log(e.ctrlKey);    // true if Ctrl held
    console.log(e.shiftKey);   // true if Shift held

    // ✅ Add item on Enter key
    if (e.key === 'Enter' && input.trim()) {
      setItems(prev => [...prev, input]);
      setInput('');
    }
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type and press Enter..."
      />
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};