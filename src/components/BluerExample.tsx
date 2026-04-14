export const FocusExample = () => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
  
    return (
      <div>
        <input
          style={{ border: isFocused ? '2px solid blue' : '2px solid gray' }}
          onFocus={() => setIsFocused(true)}    // ✅ when user clicks in
          onBlur={() => setIsFocused(false)}    // ✅ when user clicks out
          placeholder="Click me!"
        />
        <p>{isFocused ? '✏️ Editing...' : '💤 Idle'}</p>
      </div>
    );
  };