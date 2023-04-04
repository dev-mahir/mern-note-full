import React from 'react'
import { decrement, increment, incrementByAmount } from '../counterSlice'
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const {value} = useSelector(state => state.counter);

  const dispatch = useDispatch();

  return (
    <div className='d-flex justify-center items-center h-screen'>


      <div>
        <h2 className='text-center text-5xl'>{value}</h2>
        <div>
          <button onClick={() => dispatch(increment())} className='btn btn-primary'>Increment</button>
          <button onClick={() => dispatch(decrement())} className='btn btn-primary mx-2'>Decrement</button>
          <button onClick={() => dispatch(incrementByAmount(2))} className='btn btn-primary'>Increment by 2</button>
        </div>
      </div>
      

    </div>
  )
}

export default Counter