import React from 'react'

const RightCardContent = (props) => {
    return (
        <div className='absolute top-0 flex flex-col left-0 w-full h-full p-6 justify-between'>
            <h2 className='text-2xl bg-white rounded-full flex h-10 w-10 justify-center items-center'>{props.id + 1}</h2>
            <div>
                <p className='text-xl mb-14 text-white leading-normal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eveniet deleniti nam quis facere explicabo commodi excepturi quia provident itaque!</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 rounded-full text-white px-5 font-medium'>{props.tag}</button>
                    <button className='bg-blue-600 rounded-full text-white px-4 py-3 text-2xl'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent
