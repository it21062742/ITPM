import React from 'react';
import './style.css';

function HomePage() {
  return (
    <div className="hero_area">
      <section className="slider_section">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-5 offset-md-1">
                    <div className="detail-box">
                      <h1>
                        HelpMe <br />
                        <span>your No 1 personal finance manager</span>
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                      </p>
                      <div className="btn-box">
                        <a href="/signup" className="btn-1">
                          Register
                        </a>
                        <a href="login" className="btn-2">
                          Login
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about_section layout_padding">
        <div className="container">
          <div className="detail-box">
            <div className="heading_container">
              <img src="images/heading-img.png" alt="" />
              <h2>About Us</h2>
            </div>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
              letters,
            </p>
            <div className="btn-box">
              <a href="">
                <span>Read More</span>
                <img src="images/link-arrow.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="client_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>What Says Our Customer</h2>
            <p>It is a long established fact that a reader will be distracted by the</p>
          </div>
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="box">
                  <div className="img-box">
                    <img src=".images/client.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h4>Jack Mengo</h4>
                    <p>
                      It is a long established fact that a reader will be distracted by the readable cIt is a long
                      established fact that a reader will be distracted by the readable c
                    </p>
                    <img src="images/quote.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="box">
                  <div className="img-box">
                    <img src="images/client.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h4>Jack Mengo</h4>
                    <p>
                      It is a long established fact that a reader will be distracted by the readable cIt is a long
                      established fact that a reader will be distracted by the readable c
                    </p>
                    <img src="images/quote.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="box">
                  <div className="img-box">
                    <img src="images/client.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h4>Jack Mengo</h4>
                    <p>
                      It is a long established fact that a reader will be distracted by the readable cIt is a long
                      established fact that a reader will be distracted by the readable c
                    </p>
                    <img src="images/quote.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid footer_section">
        <p>&copy; 2023 All Rights Reserved.</p>
      </section>

      <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
      <script type="text/javascript" src="js/bootstrap.js"></script>
      <script>
      </script>
    </div>
  );
}

export default HomePage;
