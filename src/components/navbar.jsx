import {FaBars, FaTimes} from 'react-icons/fa'
import { useState } from 'react'

const NavLinks = [
  {title: "Home",
  link: "/"
},
  {title: "About",
  link: "/about"
},
  {title: "Gallery",
  link: "/gallery"
},
  {title: "Contact",
  link: "/contact"
}, 

{title: "Login",
  link: "/login"
},


]

const Navbar = () => {
  const [open, setOpen]= useState(false);
  const handleMenu = () => {
    setOpen((prev) => !prev)
  };
  return (
    <nav className="px-6">
      <div className="flex justify-between py-2 bg-white  w-full ">

      <div>
      {/* <FaBars /> */}
      <h1 className='font-medium text-xl md:text-2xl font-appleui'>Travelloo - Cabs</h1>
      </div>
      <div className='max-md:hidden'>
      <div className="flex gap-5 ">
      {NavLinks.map((link) => (
                  <a href={link.link} key={link.title} className='text-black text-xl font-appleui z-50 block px-3 py-2 rounded-md  font-medium'>{link.title}</a>
                  ))}
      </div>
      </div>
      <div className='-mr-2 flex md:hidden'>
                <button className='p-2 justify-center flex items-center rounded-md text-black cursor-pointer' type='button' onClick={handleMenu}  >
                {open === true? <FaTimes />: <FaBars/>}
                </button>
              </div>
      </div>

              {open? (
                <div className='md:hidden z-50 fixed'>
                <div className='ox-2 pt-2 pb-3 space-y-1'>
                {NavLinks.map((link) => (
                  <a href={link.link} key={link.title} className='text-black text-md font-appleui z-50 block  py-2 rounded-md  font-medium'>{link.title}</a>
                  ))}
                  

                </div>
              </div>
            ): null}


    </nav>
  );
}

export default Navbar;