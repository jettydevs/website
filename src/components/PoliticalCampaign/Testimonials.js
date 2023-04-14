import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"

import clientImg1 from "../../images/reviews/reviews-1.png"
import clientImg2 from "../../images/reviews/reviews-2.png"
import clientImg3 from "../../images/reviews/reviews-3.png"
import clientImg4 from "../../images/reviews/reviews-7.png"
import clientImg5 from "../../images/reviews/reviews-8.png"
import clientImg6 from "../../images/reviews/reviews-9.png"

const Testimonials = () => {
  return (
    <>
      <div
        id="testimonials"
        className="political-testimonial-area bg-color-eef1f6 ptb-100"
      >
        <div className="container">
          <div className="political-section-title">
            <span>TESTIMONIALS</span>
            <h2>People's Say About Us</h2>
          </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              992: {
                slidesPerView: 2,
              },
            }}
            modules={[Pagination]}
            className="political-testimonial-slider"
          >
            <SwiperSlide>
              <div className="political-testimonial-card">
                <div className="ratinig-star">
                  <ul>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                  </ul>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros interd nulla, ut commodo
                  diam libero vitae erat.
                </p>
                <div className="clients-profile">
                  <img src={clientImg1} alt="Image" />
                  <h3>James</h3>
                  <span>Public</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="political-testimonial-card">
                <div className="ratinig-star">
                  <ul>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                  </ul>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros interd nulla, ut commodo
                  diam libero vitae erat.
                </p>
                <div className="clients-profile">
                  <img src={clientImg2} alt="Image" />
                  <h3>Robert</h3>
                  <span>Public</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="political-testimonial-card">
                <div className="ratinig-star">
                  <ul>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                  </ul>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros interd nulla, ut commodo
                  diam libero vitae erat.
                </p>
                <div className="clients-profile">
                  <img src={clientImg3} alt="Image" />
                  <h3>Michael John</h3>
                  <span>Public</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="political-testimonial-card">
                <div className="ratinig-star">
                  <ul>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                  </ul>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros interd nulla, ut commodo
                  diam libero vitae erat.
                </p>
                <div className="clients-profile">
                  <img src={clientImg4} alt="Image" />
                  <h3>David William</h3>
                  <span>Public</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="political-testimonial-card">
                <div className="ratinig-star">
                  <ul>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                  </ul>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros interd nulla, ut commodo
                  diam libero vitae erat.
                </p>
                <div className="clients-profile">
                  <img src={clientImg5} alt="Image" />
                  <h3>Richard</h3>
                  <span>Public</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="political-testimonial-card">
                <div className="ratinig-star">
                  <ul>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                  </ul>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros interd nulla, ut commodo
                  diam libero vitae erat.
                </p>
                <div className="clients-profile">
                  <img src={clientImg6} alt="Image" />
                  <h3>Matthew</h3>
                  <span>Public</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Testimonials
