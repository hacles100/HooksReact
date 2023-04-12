import { useState } from 'react'

function Counter(){

    const [count, setCount] = useState(0);

    const incrementFunction = () => {
        setCount(count + 1);
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={incrementFunction}>Increment</button>
        </div>
    )
}

export default Counter;