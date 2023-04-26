import { useEffect, useState } from 'react';
import './style.css'

const useWindowWide = () => {
  const [width, setWidth] = useState(0)
  
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    
    window.addEventListener("resize", handleResize)
    
    handleResize()
    
    return () => { 
      window.removeEventListener("resize", handleResize)
    }
  }, [setWidth])
  
  return width
}

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const width = useWindowWide();

  useEffect(() => {
    if (width < 800) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [width])

  return (
    <>
      {isOpen ? <button className="button-open-side-bar" onClick={() => setIsOpen(!isOpen)}>...</button> : (
        <nav className="container-side-bar">
          <div className="wrap-side-bar">
            <ul className="side-bar_list">
              <li className="side-bar__item active"> Home</li>
              <li className="side-bar__item">Services</li>
              <li className="side-bar__item">News</li>
              <li className="side-bar__item">Blog</li>
              <li className="side-bar__item">Contact</li>
            </ul>
          </div>
          <div className="modal-side-bar" onClick={() => setIsOpen(true)}></div>
        </nav>
      )}
    </>
  );
}

export default SideBar;
