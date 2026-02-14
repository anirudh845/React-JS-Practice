import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)

    setUserData(response.data)
    console.log(response.data);


  }

  useEffect(() => {
    getData()
  }, [index])

  let printUser = 'No data Available'
  if (printUser.length > 0) {
    printUser = userData.map((elem, idx) => {
      return <div className='h-60 w-60'>
        <img className='h-full obj' src={elem.download_url} alt="IMG" />
        <h2>{elem.author}</h2>
      </div>
    })
  }
  return (
    <div className='text-white bg-black h-screen overflow-auto p-4'>

      <h1 className='fixed text-5xl'>{index}</h1>

      <div className='flex flex-wrap gap-10 mx-10 my-5'>
        {printUser}
      </div>

      <div className='flex justify-center gap-10 items-center p-6'>
        <button
          className='bg-amber-500 text-sm active:scale-95 text-black cursor-pointer font-semibold rounded px-4 py-3' onClick={() => {
            if (index > 1) {
              setIndex(index - 1)
            }
          }}>Prev</button>
        <button
          className='bg-amber-500 text-sm active:scale-95 text-black cursor-pointer font-semibold rounded px-4 py-3' onClick={() => {
            setIndex(index + 1)

          }}>Next</button>
      </div>
    </div>




  )
}

export default App
