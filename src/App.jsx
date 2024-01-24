import { useEffect, useState } from 'react'
import left_corner from './assets/left_corner.png'
import right_corner from './assets/right_corner.png'
import top_center from './assets/border_top_center.png'
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

    <div className="p-16">
      {paragraphs.map((p)=>{
        return <p>{p}</p>
        })}
    </div>

    </>
  )
}

export default App
