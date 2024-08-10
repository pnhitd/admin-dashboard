import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { Button } from '.'
import { useStateContext } from '../contexts/ContextProvider'
import { userProfileData } from '../data/dummy'
import avatar from '../data/avatar.jpg'

const UserProfile = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className='flex justify-between items-center'>
        <div className='font-bold text-xl dark:text-white'>User Profile</div>
        <Button
          icon={<MdOutlineCancel className='dark:text-white' />}
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>

      <div className='flex items-center mt-4 pb-2'>
        <img src={avatar} alt='avatar' className='w-20 h-20 rounded-full' />
        <div className='ml-3'>
          <div className='font-semibold text-xl dark:text-white'>Michael</div>
          <span className='text-gray-400'>Administrator</span>
          <div className='dark:text-white'>info@happyshop.com</div>
        </div>
      </div>

      <div className='mt-3'>
        {userProfileData.map((item, index) => (
          <div key={index} className='flex items-center border-solid border-t-2 py-3'>
            <button
              type='button'
              className='flex w-10 h-10 mr-5 items-center justify-center rounded-md'
              style={{ backgroundColor: item.iconBg, color: item.iconColor }}
            >
              {item.icon}
            </button>
            <div>
              <div className='font-semibold dark:text-white'>{item.title}</div>
              <span className='text-gray-400 text-sm dark:text-white'>{item.desc}</span>
            </div>
          </div>
        ))}
      </div>

      <div className='border-solid border-t-2 pt-3'>
        <button
          type='button'
          className='text-center w-full py-2 mt-2 rounded-md text-white'
          style={{ background: currentColor }}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default UserProfile