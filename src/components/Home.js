import React from 'react'

const Home = () => {
  return (
    <>
        <div className="container" id='Home'>
            <div className="row">
                  <div className="col-md-12">
                      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                          <div className="carousel-indicators">
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                          </div>
                          <div className="carousel-inner">
                              <div className="carousel-item active">
                                  <img src="images/pexels-caio-67112.jpg" className="d-block w-100" alt="..."  height="600vh" />
                              </div>
                              <div className="carousel-item">
                                  <img src="images/pexels-linkedin-sales-navigator-2182981.jpg" className="d-block w-100" alt="..."  height="600vh" />
                              </div>
                              <div className="carousel-item">
                                  <img src="images/pexels-pixabay-327540.jpg" className="d-block w-100" alt="..."  height="600vh" />
                              </div>
                          </div>
                          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span className="visually-hidden">Previous</span>
                          </button>
                          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true"></span>
                              <span className="visually-hidden">Next</span>
                          </button>
                      </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
