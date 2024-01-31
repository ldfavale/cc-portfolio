import { useEffect, useState } from 'react'
import left_corner from './assets/left_corner.png'
import right_corner from './assets/right_corner.png'
import top_center from './assets/border_top_center.png'
import small_button from './assets/small_button.png'
import large_button from './assets/large_button.png'
import './App.css'

function App() {
  const [paragraphs, setParagraphs] = useState([])

  useEffect(()=>{
    for(let x=0;x<200;x++){
      setParagraphs([...paragraphs, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit exercitationem suscipit, hic totam eligendi in adipisci non pariatur deserunt. Expedita soluta, illo consequatur vel quia mollitia excepturi fuga minus animi!"])
    }
    console.log(paragraphs)
  },[paragraphs])

  return (
    <>
    <div className=' overflow-hidden  top-0 left-0 fixed z-20'>
        <img src={left_corner} alt="" width={140} className='' />
    </div>
    <div className='h-screen w-[30px] top-0 left-0 fixed bg-[url("./assets/right_frame.png")] bg-contain z-10'></div>
    <div className=' overflow-hidden  top-0 right-0 fixed z-20'>
        <img src={right_corner} alt="" width={140} className='' />
    </div>
    <div className='h-screen w-[30px] top-0 right-0 fixed bg-[url("./assets/left_frame.png")] bg-contain z-10'></div>
    <div className='flex  fixed w-full'>
        <div className="w-[120px]"></div>
        <div className='h-[24px] flex-grow  bg-[url("./assets/flexible_top_left.png")] bg-contain hidden sm:flex'>
        </div>

        <div className='h-[24px] flex-grow  bg-[url("./assets/flexible_top_right.png")] bg-contain '></div>
        <div className="w-[120px]"></div>
    </div>
    <img src={top_center} alt="" width={60} className='fixed right-[50%] [transform:translate(+30px,0%)] top-0' />

    <div className="p-16 bg-[url('./assets/background.png')] bg-cover bg-center h-screen flex flex-col  items-end justify-center space-x-4 space-y-4 ">
        <div className='w-32'>
          <img src={small_button} alt=""  className='' />
        </div>
        <div className='w-32'>
          <img src={small_button} alt=""  className='' />
        </div>
        <div className='w-32'>
          <img src={small_button} alt=""  className='' />
        </div>
        <div className='w-32'>
          <img src={small_button} alt=""  className='' />
        </div>


    </div>
    <div className="p-16 bg-[#58646B] h-screen flex flex-row justify-center space-x-4 md:justify-around flex-wrap">
        <div className='w-32 ml-4 sm:ml-0'>
          <img src={large_button} alt=""  className='' />
        </div>
        <div className='w-32'>
          <img src={large_button} alt=""  className='' />
        </div>
        <div className='w-32'>
          <img src={large_button} alt=""  className='' />
        </div>
        <div className='w-32'>
          <img src={large_button} alt=""  className='' />
        </div>
    </div>

    </>
  )
}

export default App
