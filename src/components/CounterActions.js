import { useDispatch, useSelector } from "react-redux";
import { action } from "../redux/reducers/counterReducer";
// change the counter actions imports
// import {
//   decrementCounter,
//   incrementCounter,
//   resetCounter
// } from "../redux/actions/counterActions";

export const CounterActions = () => {
  const dispatch = useDispatch();
  // change as per the store implementation
  const { count } = useSelector((state) => state.counter);

  return (
    <div className="actions">
      <button
        disabled={count <= 0}
        onClick={() => dispatch(action.decreaseCounter())}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
          alt="dec"
        />
      </button>
      <button
        disabled={count >= 10}
        onClick={() => dispatch(action.increaseCounter())}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
          alt="inc"
        />
      </button>
      <button onClick={() => dispatch(action.resetCounter())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/9923/9923627.png"
          alt="reset"
        />
      </button>
    </div>
  );
};
