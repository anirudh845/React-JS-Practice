import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]

    copyTask.push({ title, details })

    setTask(copyTask)

    setDetails('')
    setTitle('')
  }
  return (
    <div className='w-full h-full text-black bg-emerald-300'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex justify-between py-15 px-20 gap-40'>
        <div className='flex items-start flex-col gap-10'>
          <h1 className='text-6xl font-bold mb-5'>Add Notes</h1>
          <input
            type="text"
            placeholder='Enter Notes Heading'
            className='px-5 py-3 border-2 rounded-2xl w-200 h-15 text-xl outline-none'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)

            }}
          />

          <textarea
            type="text"
            placeholder='Write Details'
            className='px-5 py-3 border-2 rounded-2xl w-200 h-35 text-xl outline-none'
            value={details}
            onChange={(e) => {
              setDetails(e.target.value)
            }}
          />

          <button className='bg-blue-600 hover:bg-blue-500 text-2xl w-50 h-20 rounded cursor-pointer px-5 py-2'>Add Note</button>
        </div>

        <img className='h-80 w-80 my-15' src="https://static.vecteezy.com/system/resources/thumbnails/071/759/575/small/to-do-list-3d-icon-png.png" alt="Notes" />

      </form>
      <div className='px-15 py-5'>
        <h1 className='text-6xl font-bold mb-15'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start overflow-auto gap-6 h-full mt-6'>
          {task.map((elem, idx) => {
            return <div key={idx} className='h-75 w-60 rounded-2xl bg-blue-200 flex flex-col relative py-6 px-4 items-start justify-between '>
              <div>
                <h3 className='font-bold text-2xl mb-2 leading-tight'>{elem.title}</h3>
                <p className='text-gray-500'>{elem.details}</p>
              </div>

              <button onClick={() => {
                const copyTask = [...task]
                copyTask.splice(idx, 1)
                setTask(copyTask)
              }} className='p-4 bg-red-500 w-full font-medium text-xl rounded-2xl hover:bg-red-400 cursor-pointer'>Delete Note</button>
            </div>

          })}
        </div>
      </div>
    </div>
  )
}

export default App
