import React, {useEffect, useRef, useState } from 'react'

const Table = (props) => {
    const [count, setCount] = useState(12);
    const [data, setData] = useState({});
    const initialRender = useRef(true);

    useEffect( () => {
        let r = (Math.random() + 1).toString(36).substring(7);
        if(initialRender.current == true)
        {
            initialRender.current = false;
            return; 
        }
        setTimeout( () => setData({data: r}), 1000);
        }, [count]
    )
    return(
        <>
        <div>
           data: {JSON.stringify(data)}
        </div>
        <div>
            {props.count}
        </div>
        <div>
            button has been clicked {count} times
        </div>
        <button onClick={() => setCount( count + 1)}>
            increase count 
        </button>
        </>

    )
}

export default Table;