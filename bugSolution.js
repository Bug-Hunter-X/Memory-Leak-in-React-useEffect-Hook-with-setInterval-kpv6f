```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId;
    // Correct way to set interval and handle cleanup
    const tick = () => {
      setCount(prevCount => prevCount + 1);
    };
    intervalId = setInterval(tick, 1000);

    return () => clearInterval(intervalId); // Cleanup function
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```