import { useState } from 'react';
function Counter() {
    let [valueState, setValueState] = useState(0);

    const onIncClicked = () => {
        setValueState(++valueState);
        console.log("Counter incremented");
    }
    const onDecClicked = () => {
        setValueState(--valueState);
        console.log("Counter decremented");
    }

    return (
        <div>
            <input type="button" value='+' onClick={onIncClicked} />
            <h1>{valueState}</h1>
            <input type="button" value='-' onClick={onDecClicked} />
        </div>
    );
}

export default Counter;