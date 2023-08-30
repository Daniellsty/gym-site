import React, { useEffect, useState } from "react";
import { FaMedal } from "react-icons/fa";
import { GiRibbonMedal } from "react-icons/gi";
import { GiTrophyCup } from "react-icons/gi";
import bycyicleMan from '../../assests/images/awardimg.png';
import shoulderDumble from '../../assests/images/b1.jpg'
import food from '../../assests/images/b2.jpg'
import gym from '../../assests/images/b3.jpg'
const Main = () => {


  const [scroll,setScroll] = useState(false)
  useEffect(() => {

    const handleResize=(e)=>{

      const scrolled = document.documentElement.scrollTop;

      if(scrolled >= 600){
        setScroll(true)
      }else{
        setScroll(false)
      }

      
    }
    window.addEventListener('scroll',handleResize)

   
  
  }, []);

  return (
    <div>
      <section className="awards">
        <div className="container-fluid py-5 text-light ">
          <div className="row">
            <div className="col-xl-6 col-lg-6 mx-auto">
              <h1 className="text-center">افتخارات</h1>
              <p className="text-justify text-secondary text-center my-4">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه متن ساختگی با
                تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
                است، چاپگرها و طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
          </div>

          <div className="row my-5 ">
            <div className="col-md-4 text-center">
              <FaMedal className="display-1 text-danger text-center mx-auto" />
              <h1> مدال ها</h1>
              <p className="my-5 text-secondary">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلیسها، و شرایط
                سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
                اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
                استفاده قرار گیرد.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <GiTrophyCup className="display-1 text-danger text-center mx-auto" />
              <h1>قهرمانی ها</h1>
              <p className="my-5 text-secondary">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلیسها، و شرایط
                سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
                اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
                استفاده قرار گیرد.
              </p>
            </div>
            <div className="col-md-4 text-center ">
              <GiRibbonMedal className="display-1 text-danger text-center mx-auto" />
              <h1> برگزیده کیفی</h1>
              <p className="my-5 text-secondary">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلیسها، و شرایط
                سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
                اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
                استفاده قرار گیرد.
              </p>
            </div>
          </div>

          <div className="row items-center">
            <div className={`col-md-5 col-xs-12  text-center ${scroll ? 'fade-left' :null }`}>
            <img className="img-section" src={bycyicleMan} alt="" />              
            </div>
            <div className={`col-md-5 md-mx-5 col-xs-12  text-center ${scroll ? 'fade-right' :null }`}>
              <h1 className="text-end ">با کیفیت ترین تجهیزات</h1>
              <p className="text-end">
         
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلیسها، و شرایط
                سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
                اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
                استفاده قرار گیرد.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-secondary">
        <div className="container-fluid pe-0 ms-1">
          <div className="row  w-100 py-5">
            <div className="col-lg-4 col-sm-6 my-5  ">
              <div className="position-relative">

              <img className="img-section" src={shoulderDumble} alt="" />
              <div >
               <h1 className="heading"> برنامه تمرینی</h1>
              </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6  my-5 ">
              <div className="position-relative">

              <img className="img-section" src={food} alt="" />
              <div >
              <h1 className="heading">رژیم غذایی</h1>
              </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 my-5  ">
              <div className="position-relative" >

              <img className="img-section h-100 card-img" src={gym} alt="" />
              <div >
              <h1 className="heading "> مربی شخصی</h1>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
