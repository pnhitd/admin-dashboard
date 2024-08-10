import React, { act } from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { cartData } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { Button } from '.';

const Cart = () => {
  const { currentColor } = useStateContext();

  return (
    <div className='bg-half-transparent w-full fixed nav-item top-0 right-0'>
      <div className='float-right h-screen  duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8'>
        <div className='flex justify-between items-center'>
          <div className='font-bold text-xl'>Shopping Cart</div>
          <Button
            icon={<MdOutlineCancel />}
            bgHoverColor="light-gray"
            size="2xl"
            borderRadius="50%"
          />
        </div>
        <div className='mt-5'>
          {cartData.map((item, index) => (
            <div className='flex items-center border-solid border-b-2 py-4' key={index}>
              <img
                src={item.image}
                alt="item"
                className='w-20 h-15 rounded-sm mr-3'
              />
              <div>
                <div className='font-semibold mt-2'>{item.name}</div>
                <span className='text-gray-700 text-sm dark:text-white'>{item.category}</span>
                <div className='flex items-center mt-1'>
                  <div className='font-bold mr-10'>{item.price}</div>
                  <div className="flex items-center border-1 border-r-0 border-color rounded dark:border-white">
                    <p className="p-1 border-r-1 dark:border-white border-color text-red-600"><AiOutlineMinus /></p>
                    <p className="p-1 border-r-1 border-color dark:border-white text-green-600">0</p>
                    <p className="p-1 border-r-1 border-color dark:border-white text-green-600"><AiOutlinePlus /></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-between mt-4'>
          <div className='text-gray-500 dark:text-white'>Sub Total</div>
          <div className='dark:text-white'>$890</div>
        </div>
        <div className='flex justify-between'>
          <div className='text-gray-500 dark:text-white'>Total</div>
          <div className='dark:text-white'>$890</div>
        </div>
        <button
          type='button'
          className='text-center w-full py-2 rounded-md text-white mt-4'
          style={{ background: currentColor }}
        >
          Place Order
        </button>
      </div>
    </div>
  )
}

export default Cart