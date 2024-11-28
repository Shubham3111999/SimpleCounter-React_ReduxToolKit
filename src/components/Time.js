import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../redux/reducers/timerReducer";
// change the timer actions imports
// import { incrementTimer } from "../redux/actions/timerActions";

export const Time = () => {
  const dispatch = useDispatch();
  // change as per the store implementation
  const { isRunning, elapsedTime } = useSelector((state) => state.timer);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(action.increaseTimer());
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning, dispatch]);

  return <b>{elapsedTime}</b>;
};
