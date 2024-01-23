import { useEffect, useState } from 'react'
import border_left from './assets/border_left.png'
import border_right from './assets/border_right.png'
import border_top from './assets/border_top.png'
import viteLogo from '/vite.svg'
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
    <div className='h-36 overflow-hidden  top-0 left-0 fixed '>
        <img src={border_left} alt="" width={140} className='' />
      </div>
      <div className='h-screen  top-0 right-0 fixed'>
        <img src={border_right} alt="" width={140} className='' />
      </div>
    <div className='flex  fixed w-full     '>
      {/* <div className='w-[120px] h-screen   bg-[url("./assets/border_left.png")] bg-cover bg-no-repeat'></div>
      <div className='h-[16px] bg-no-repeat bg-fixed  flex-grow bg-[url("./assets/border_top_flexible.png")] bg-center bg-contain '></div>
      <div className='h-[39px] bg-no-repeat bg-fixed w-96 bg-[url("./assets/border_top.png")] bg-contain bg-center'></div>
      <div className='h-[16px] bg-no-repeat bg-fixed   flex-grow bg-[url("./assets/border_top_flexible.png")] bg-center bg-contain'></div>
      <div className='w-[120px] h-screen   bg-[url("./assets/border_right.png")] bg-cover bg-no-repeat'></div> */}
      <div className="w-[140px]"></div>

      <div className='h-[16px] flex-grow bg-[#828282]   border-b-[3px] border-[#474747]'></div>
      <div className='  '>
        <img src={border_top} alt="" width={710} className='' />
      </div>
      <div className='h-[16px] flex-grow bg-[#828282]   border-b-[3px] border-[#474747]'></div>

      <div className="w-[140px]"></div>
    </div>

    <div className="p-16">
      {paragraphs.map((p)=>{
        return <p>{p}</p>
        })}
    </div>

    </>
  )
}

export default App
