import { useState } from "react"
import { Button } from "react-bootstrap"
import { INCREMENT, DECREMENT } from "../redux/actions/types"
import { useSelector, useDispatch } from "react-redux"
const Counter = () => {
    // const [counter, setCounter] = useState(0);
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch()

    let handleIncrease = () => {
        // setCounter(c => c + 1)
        dispatch({ type: INCREMENT })
    }
    let handleDecrease = () => {
        // setCounter(c => c - 1)
        dispatch({ type: DECREMENT })
    }
    return (
        <div>
            <h2>Counter</h2>
            <div className="d-flex w-25 justify-content-between mx-auto">
                <Button onClick={handleIncrease}>+</Button>
                {/* <h3>{counter}</h3> */}
                <h3>{count}</h3>
                <Button onClick={handleDecrease}>-</Button>
            </div>
        </div>
    )
}


export default Counter