import React from 'react'

const Contact = () => {
  return (
    <div>
    <section class="contact p-5">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-5 pb-4 mr-auto">
            <h3 class="text-white mb-5">با ما در ارتباط باشید</h3>
            <form action="" class="contact-form">
              <div class="form-group py-4">
                <input type="text" class="form-control my-2 p-2 input" id='name' placeholder="نام"/>
                <label for="name" class="label">نام</label>
              </div>
              <div class="form-group py-4">
                <input type="text" class="form-control my-2 p-2 input" id='email' placeholder="ایمیل"/>
                <label for="email" class="label">ایمیل</label>
              </div>
              <div class="form-group py-4">
                <input type="checkbox" id="check"/>
                <label for="check" class="text-white">اطلاعیه ها را برایم ارسال کن</label>
              </div>
              <button class="btn btn-block p-2 submit-button">عضویت</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <footer class="bg-dark px-5">
      <div class="container-fluid">
        <div class="row text-light py-4">
          <div class="col-lg-4 col-sm-6">
            <h5 class="pb-3">درباره ما</h5>
            <p class="">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
            </p>
          </div>
          <div class="col-lg-2 col-sm-6">
            <h5 class="pb-3">صفحات</h5>
            <ul class="list-unstyled  ">
              <li>
                <a class="footer-link  text-decoration-none" href="">خانه</a>
              </li>
              <li>
                <a class="footer-link text-decoration-none" href="">افتخارات</a>
              </li>
              <li>
                <a class="footer-link text-decoration-none" href="">گالری</a>
              </li>
              <li>
                <a class="footer-link text-decoration-none" href="">مربی ها</a>
              </li>
              <li>
                <a class="footer-link text-decoration-none" href="">پلن ها</a>
              </li>
              <li>
                <a class="footer-link text-decoration-none" href="">ارتباط با ما</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-2 col-sm-6">
            <h5 class="pb-3"> کمک میخواهید ؟</h5>
            <ul class="list-unstyled">
              <li>
                <a class="footer-link text-decoration-none" href="">پشتیبانی</a>
              </li>
              <li>
                <a class="footer-link text-decoration-none" href="">مشاوره تغذیه</a>
              </li>
              <li>
                <a class="footer-link text-decoration-none" href="">برنامه لاغری</a>
              </li>
              <li>
                <a class="footer-link text-decoration-none" href="">اطلاعیه ها</a>
              </li>
              <li>
                <a class="footer-link text-decoration-none" href="">oxygen@email.com</a>
              </li>
            </ul>

          </div>
          <div class="col-lg-4 col-sm-6">
            <h5 class="pb-3">درباره ما</h5>
            <p class="">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
            </p>
            <form action="" class="mb-3">
              <div class="input-group">
                <input class="form-control" placeholder="ایمیل" type="text"/>
                <div class="input-group-append">
                  <button class="btn btn-danger text-white">ارسال</button>
                </div>
              </div>
            </form>
            <ul class="list-inline">
              <li class="list-inline-item">
                <i class="fab fa-facebook fa-2x text-primary"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-instagram fa-2x text-danger"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-twitter fa-2x text-info"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-youtube fa-2x text-danger"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </footer>
    </div>
  )
}

export default Contact