import React, { useEffect, useState } from "react";

const Header = () => {

  const [open,setOpen] =useState(false)
  const [scroll,setScroll] = useState(false)
  useEffect(() => {

    const handleResize=(e)=>{

      const scrolled = document.documentElement.scrollTop;

      if(scrolled >= 300){
        setScroll(true)
      }else{
        setScroll(false)
      }

      

    }
    window.addEventListener('scroll',handleResize)

   
  
  }, []);

  return (

    <>
    
    <header  >
      <div className="d-flex justify-content-end ">

    <nav className={`${scroll ? 'custom-navbar py-1 menu-item' : 'nav-menu py-4' } navbar navbar-expand-lg navbar-light fixed-top  `}>
  <div class='container-fluid  '>
    <button onClick={()=> (setOpen(prev=> !prev )) } className={`navbar-toggler text-white  ${open ? 'change ' : null }`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"  >
      <div className="line1 bg-light"></div>
      <div className="line2 bg-light"></div>
      <div className="line3 bg-light"></div>
     
    </button>
    <div class="collapse navbar-collapse pe-0  min-vw-100 ms-5" id="navbarNav">
      <ul class="navbar-nav p-4 ">
        <li class=" m-2 ">
          <a class="text-decoration-none    menu-item"  href="#">خانه</a>
        </li>
        <li class="m-2">
          <a class="text-decoration-none    menu-item" href="#">افتخارات</a>
        </li>
        <li class="m-2">
          <a class="text-decoration-none   menu-item" href="#">خدمات</a>
        </li>
        <li class="m-2">
          <a class="text-decoration-none   menu-item" href="#">گالری</a>
        </li>
        <li class="m-2">
          <a class="text-decoration-none   menu-item" href="#" >مربی ها</a>
        </li>
        <li class="m-2">
          <a class="text-decoration-none   menu-item" href="#" >پلن ها</a>
        </li>
        <li class="m-2">
          <a class="text-decoration-none   menu-item" href="#" >ارتباط با ما</a>
        </li>
      </ul>
    </div>
  </div>
</nav> 
      </div>


   


     <div className="banner  ">
        <div style={{fontFamily:'impact'}} className="text-white banner-heading ">

        <h1 className="text-uppercase display-1 fw-bold">opxygen gym</h1>
        <p className="text-uppercase fw-bold banner-par "> <span>no pain</span> <span>no gain</span> </p>
        </div>
     </div>
    </header>
  


    </>

  );
};

export default Header;
