import React, { useEffect, useState } from "react";
import { data } from "./data/data";
import firstTrainer from "../../assests/images/p1.jpg";
import secondTrainer from "../../assests/images/p2.jpg";
import thirdTrainer from "../../assests/images/p3.jpg";
import { AiFillStar } from "react-icons/ai";
import Panel from '../../assests/images/membership.jpg' 
const Gallery = () => {
  const [pics, setPics] = useState(data);

  const [third, setThird] = useState(false);
  const [twist, setTwist] = useState(false);
  const [first, setFirst] = useState(false);
  const [all, setAll] = useState(true);


  const [scroll,setScroll] = useState(false)
  useEffect(() => {

    const handleResize=(e)=>{

      const scrolled = document.documentElement.scrollTop;

      if(scrolled >= 4000){
        setScroll(true)
      }else{
        setScroll(false)
      }

      
    }
    window.addEventListener('scroll',handleResize)

   
  
  }, []);







  const changeCategory = (e) => {
    const value = e.target.value;
    if (value.trim().includes("همه")) {
      setAll(true);
    } else {
      setAll(false);
    }

    if (value.trim().includes("دسته اول")) {
      setFirst(true);
    } else {
      setFirst(false);
    }

    if (value.trim().includes("دسته دوم")) {
      setTwist(true);
    } else {
      setTwist(false);
    }

    if (value.trim().includes("دسته سوم")) {
      setThird(true);
    } else {
      setThird(false);
    }

    const filteredData = data.filter((item) => {
      return item.title.toLowerCase().trim().includes(value);
    });

    if (value.toLowerCase().trim().includes("همه")) {
      setPics([...data]);
    } else {
      setPics([...filteredData]);
    }
  };

  return (
    <div>
      <div
        onClick={(e) => changeCategory(e)}
        className="list-unstyled d-flex justify-content-center my-5">
        
          <button
            style={{ border: "none", color: `${third ? "#2980b9" : "black"}` }}
            value="دسته سوم"
            className=" border-none bg-white px-2">
            
            دسته سوم /
          </button>
        
        
          <button
            style={{ border: "none", color: `${twist ? "#2980b9" : "black"}` }}
            value="دسته دوم"
            className=" border-none bg-white px-2">
            
            دسته دوم /
          </button>
        

        
          <button
            style={{ border: "none", color: `${first ? "#2980b9" : "black"}` }}
            value="دسته اول"
            className=" border-none bg-white px-2">
            
            دسته اول /
          </button>
        
        
          <button
            style={{ border: "none", color: `${all ? "#2980b9" : "black"}` }}
            className=" border-none bg-white px-2"
            value="همه">
            
            همه /
          </button>
        
      </div>
      <div className="container my-5 ">
        <div className="d-flex flex-wrap justify-content-center">
          {pics &&
            pics.map((item) => (
              <div key={item.id} className="p-1">
                <img width="300" height="230" src={item.img} alt="" />
              </div>
            ))}
        </div>
      </div>
      <div className="bg-dark text-white">
        <div className="container">
          <div className="row ">
            <div className="col-xl-6 col-lg-6 mx-auto">
              <h1 className="text-center border-bottom w-25 mx-auto py-3 border-3 border-white">
                مربی ها
              </h1>
              <p className="text-justify text-light text-center my-4">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه متن ساختگی با
                تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
                است، چاپگرها و طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
          </div>
        </div>

        <div
          id="carouselExampleIndicators"
          class="carousel slide py-5"
          data-bs-ride="true">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={firstTrainer}
                class="d-block w-50 d-block mx-auto rounded-circle"
                alt="..."
              />
              <div className="text-center">
                <h1>هستی نظامی (مربی رسمی)</h1>
                <p className="w-50  text-center mx-auto mt-5">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه متن
                  ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
                </p>
                <ul className="d-flex justify-content-center list-unstyled mx-auto text-warning">
                  <li>
                    <AiFillStar />
                  </li>
                  <li>
                    <AiFillStar />
                  </li>
                  <li>
                    <AiFillStar />
                  </li>
                  <li>
                    <AiFillStar />
                  </li>
                </ul>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={secondTrainer}
                class="d-block w-50 d-block mx-auto rounded-circle"
                alt="..."
              />
              <div className="text-center">
                <h1>آرمان امیری (مربی رسمی)</h1>
                <p className="w-50 text-center mx-auto mt-5">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه متن
                  ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
                </p>
                <ul className="d-flex justify-content-center list-unstyled mx-auto text-warning">
                  <li>
                    <AiFillStar />
                  </li>
                  <li>
                    <AiFillStar />
                  </li>
                  <li>
                    <AiFillStar />
                  </li>
                  <li>
                    <AiFillStar />
                  </li>
                </ul>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={thirdTrainer}
                class="d-block w-50 d-block mx-auto rounded-circle"
                alt="..."
              />
              <div className="text-center">
                <h1>امیر فاطمی (مربی رسمی)</h1>
                <p className="w-50 text-center mx-auto mt-5">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه متن
                  ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
                </p>
                <ul className="d-flex justify-content-center list-unstyled mx-auto text-warning">
                  <li>
                    <AiFillStar />
                  </li>
                  <li>
                    <AiFillStar />
                  </li>
                  <li>
                    <AiFillStar />
                  </li>
                  <li>
                    <AiFillStar />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"></button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"></button>
        </div>
      </div>
    
        <div className="container-fluid pe-0 ps-3 overflow-hidden my-2">
        <div class="row text-center mb-5 justify-content-center">
          <div class="col-xl-6 col-lg-8 col-md-10">
            <h1 class="text-muted">پلن ها</h1>
            <div class="underline my-5"></div>
            <p class="text-muted lh-2 h5">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
          </div>
        </div>
       
        <div class="row">
          <div className={`col-lg-4 ${scroll ? 'moveFromLeft' :null } `}>
            <div class="card card-1 text-light py-4 my-4 border-0 mx-auto">
              <div class="card-body text-center text-center">
                <h4 class="mb-5">پلن ماهانه</h4>
                <h1>۲۰ </h1>
                <ul class="list-unstyled">
                  <li class="py-3 card-list-item">مربی تمرین</li>
                  <li class="py-3 card-list-item">مربی تغذیه</li>
                  <li class="py-3 card-list-item">سالن هوازی</li>
                  <li class="py-3 card-list-item border-0">سالن آبی</li>
                </ul>
                <a href="" class=" membership-card-button text-light">ثبت نام</a>
              </div>
            </div>
          </div>
          <div className={`col-lg-4 ${scroll ? 'moveFromBottom' :null } `}>
            <div class="card card-2 text-light py-4 my-4 border-0 mx-auto">
              <div class="card-body text-center">
                <h4 class="mb-5">پلن سالانه</h4>
                <h1>۵۰ </h1>
                <ul class="list-unstyled">
                  <li class="py-3 card-list-item">مربی تمرین</li>
                  <li class="py-3 card-list-item">مربی تغذیه</li>
                  <li class="py-3 card-list-item">سالن هوازی</li>
                  <li class="py-3 card-list-item border-0">سالن آبی</li>
                </ul>
                <a href="" class=" membership-card-button text-light">ثبت نام</a>
              </div>
            </div>
          </div>
          <div className={`col-lg-4 ${scroll ? 'moveFromRight' :null } `}>
            <div class="card card-3 text-light py-4 my-4 border-0 mx-auto">
              <div class="card-body text-center">
                <h4 class="mb-5">پلن سه ماهه</h4>
                <h1>۳۰ </h1>
                <ul class="list-unstyled">
                  <li class="py-3 card-list-item">مربی تمرین</li>
                  <li class="py-3 card-list-item">مربی تغذیه</li>
                  <li class="py-3 card-list-item">سالن هوازی</li>
                  <li class="py-3 card-list-item border-0">سالن آبی</li>
                </ul>
                <a href="" class=" membership-card-button text-light">ثبت نام</a>
              </div>
            </div>
          </div>
        </div>
        </div>



    </div>
  );
};

export default Gallery;
