```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [someExternalState, setSomeExternalState] = useState(false);

  useEffect(() => {
    if (count > 5) {
      console.log('Count is greater than 5');
    }
  }, [count, someExternalState]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>External State: {someExternalState ? 'true' : 'false'}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setSomeExternalState(!someExternalState)}>Toggle External State</button>
    </div>
  );
}
export default MyComponent; 
```