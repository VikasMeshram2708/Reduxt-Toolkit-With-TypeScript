import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { decrement, increment } from "../state/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <h1>{count}</h1>
      <div className="">
        <button
          className="bg-pink-500 rounded-full font-semibold px-4 py-2"
          onClick={() => dispatch(increment())}
          type="button"
        >
          Increment
        </button>
        <button
          className="bg-pink-500 rounded-full font-semibold px-4 py-2"
          onClick={() => dispatch(decrement())}
          type="button"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
