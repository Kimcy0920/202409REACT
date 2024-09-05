import React, {useState} from "react";

const Counter2 = () => {
    const [num, setNum] = useState(0); // 1

    const increment = () => { // 2
        setNum = (num + 1);
    }

    return (
        <div>
            <p>Count: {num}</p>
            <button onClick={() => setNum(num + 1)}>1번방식 +</button><br/>
            <button onClick={increment}>2번방식 +</button>
        </div>
    );
}

export default Counter2;