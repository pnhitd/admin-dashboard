import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { chatData } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'
import { Button } from '.'

const Notification = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className='flex justify-between items-center'>
        <div className='font-bold text-xl dark:text-white'>Notifications</div>
        <Button
          icon={<MdOutlineCancel className='dark:text-white' />}
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className=''>
        {chatData.map((item) => (
          <div className='flex border-solid border-b-2 mb-4'>
            <div className='my-2'>
              <img
                src={item.image}
                alt="avatar"
                className='w-10 h-10 rounded-full mr-5'
              />
            </div>
            <div className='mb-4'>
              <div className='font-semibold text-xl dark:text-white'>{item.message}</div>
              <div className='font-light dark:text-white'>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <button
        type='button'
        className='text-center w-full py-2 rounded-md text-white'
        style={{ background: currentColor }}
      >
        See all nofitications
      </button>
    </div>
  )
}

export default Notification