import { useState } from 'react'
import {KeyboardExample}from'./components/KeyboardExample.tsx'

const InputExample = () => {
  const [value, setValue] = useState<string>('');

  // ✅ ChangeEvent for inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);       // current value
    console.log(e.target.name);        // input name attribute
    console.log(e.target.type);        // input type (text, email...)
    setValue(e.target.value);
  };

  return (
    <>  <input
    placeholder='Console..'
      type="text"
      value={value}
      onChange={handleChange}
    />
    <p>{value}</p>
  </>
  ) 
}

const ButtonExample = () => {
  // ✅ Simple click - no event needed
  const handleSimpleClick = () => {
    console.log('clicked!');
  };

  // ✅ With event - MouseEvent
  const handleClickWithEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);           // element clicked
    console.log(e.clientX);         // x position
    console.log(e.clientY);         // y position
    e.preventDefault();             // prevent default behavior
  };

  // ✅ With extra argument
  const handleItemClick = (id: number) => {
    console.log(`Item ${id} clicked`);
  };

  return (
    <div>
      <button onClick={handleSimpleClick}>Simple Click</button>
      <button onClick={handleClickWithEvent}>Click with Event</button>
      <button onClick={() => handleItemClick(42)}>Click with Arg</button>
    </div>
  );
};

type FormData = {
  username: string;
  email: string;
  password: string;
};

const LoginForm = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
  });

  // ✅ handle all inputs with one handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,     // ✅ dynamic key based on input name
    }));
  };

  // ✅ FormEvent for form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();              // ✅ prevent page refresh
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"             // ✅ name matches FormData key
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="email"
        name="email"                // ✅ name matches FormData key
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"             // ✅ name matches FormData key
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

type Category = 'books' | 'electronics' | 'clothing';

const SelectExample = () => {
  const [category, setCategory] = useState<Category>('books');

  // ✅ SelectElement for dropdowns
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value as Category);  // ✅ cast to your type
  };

  return (
    <div>
      <select value={category} onChange={handleSelect}>
        <option value="books">Books</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
      </select>
      <p>Selected: {category}</p>
    </div>
  );
};


function App() {

  return (
    <>
    <div>
     <InputExample/>
     <ButtonExample/>
     <LoginForm/>
     <SelectExample/>
     <KeyboardExample/>
    </div>
    </>
  )
}

export default App
