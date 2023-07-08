import React, { useState } from 'react'
import './Navbar.css'
import NavMobile from './NavMobile'

function Navbar({show,setShow}) {
    const [active, setActive] = useState('1');
    
   
      const data =  [
            { id: 1, name: 'Product Journey', subtitle: 'the Product journey Defines the journey travel from getting manufactured to recycle' },
            { id: 2, name: 'Material Flow', subtitle: 'the Product journey Defines the journey travel from getting manufactured to recycle' },
            { id: 3, name: 'Images', subtitle: 'the Images makes transparency in the journey a product travel from getting manufactured to recycle' },
            { id: 4, name: 'Emission Report', subtitle: 'the Images makes transparency in the journey a product travel from getting manufactured to recycle' }
        ]
    
    const handleChange = (e) => {
       
        const val=e.target.innerText.charAt(0).toLowerCase()+ e.target.innerText.substr(1,14).replace(" ","")
        setShow(val);
        setActive(e.target.id);
        
    }
    
    return (
        <>
            <div className="container sm:hidden  md:hidden lg:flex ">
                {data.map((item) => (
                    <>
                        <div onClick={(e) => handleChange(e)} id={"1"} className="handleactive   flex justify-center cursor-pointer">
                            <div className={` titlediv ${item.id == active ? "paraname_handle" : " "} `} ><p id={item.id} className=''>{item.name}</p></div>
                            <div className={` bg-slate-200 ${item.id == active ? "support_text_active" : "hidden"} flex items-center `} >
                            <p>{item.subtitle}</p>
                             </div>
                        </div>
                    </>
                ))}


            </div>
            <NavMobile/>
        </>
      
    
    )
}


export default Navbar