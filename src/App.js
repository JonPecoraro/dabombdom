import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
          <div className="container">
              <a className="navbar-brand" href="#page-top">Dominic Pecoraro</a>
              <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  Menu
                  <i className="fas fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ms-auto">
                      <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Photos</a></li>
                      <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
                  </ul>
              </div>
          </div>
      </nav>
      <header className="masthead bg-primary text-white text-center">
          <div className="container d-flex align-items-center flex-column">
              <img className="masthead-avatar mb-5" src={require('./img/profile.png').default} alt="..." />
              <h1 className="masthead-heading text-uppercase mb-0">Dominic Pecoraro</h1>
              <div className="divider-custom divider-light">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                  <div className="divider-custom-line"></div>
              </div>
              <p className="masthead-subheading font-weight-light mb-0">Great - Fantastic - Super Kid</p>
          </div>
      </header>
      <div id="photo-section"></div>
      <section className="page-section portfolio" id="portfolio">
          <div className="container">
              <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Photos</h2>
              <div className="divider-custom">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                  <div className="divider-custom-line"></div>
              </div>
              <div className="row justify-content-center">
                  <div className="col-md-6 col-lg-4 mb-5">
                      <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                          <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                              <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                          </div>
                          <img className="img-fluid" src={require('./img/event-clipart/birth.png').default} alt="..." />
                      </div>
                  </div>
                  <div className="col-md-6 col-lg-4 mb-5">
                      <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                          <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                              <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                          </div>
                          <img className="img-fluid" src={require('./img/event-clipart/baptism.png').default} alt="..." />
                      </div>
                  </div>
                  <div className="col-md-6 col-lg-4 mb-5">
                      <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                          <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                              <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                          </div>
                          <img className="img-fluid" src={require('./img/event-clipart/home.png').default} alt="..." />
                      </div>
                  </div>
                  <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                      <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                          <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                              <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                          </div>
                          <img className="img-fluid" src={require('./img/event-clipart/birthday.png').default} alt="..." />
                      </div>
                  </div>
                  <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                      <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                          <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                              <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                          </div>
                          <img className="img-fluid" src={require('./img/event-clipart/holiday.png').default} alt="..." />
                      </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                      <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                          <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                              <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                          </div>
                          <img className="img-fluid" src={require('./img/event-clipart/playtime.png').default} alt="..." />
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="page-section bg-primary text-white mb-0" id="about">
          <div className="container">
              <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
              <div className="divider-custom divider-light">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                  <div className="divider-custom-line"></div>
              </div>
              <div className="row">
                  <div className="col-lg-4 ms-auto">
                    <p className="lead">
                      Dominic Pecoraro is a great kid. He was born on March 28th, 2020 to his parents Vince and Amber. His sister
                      and borthers were excited to welcome him into the family.
                    </p>
                  </div>
                  <div className="col-lg-4 me-auto"><p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
              </div>
              <div className="text-center mt-4">
                  <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
                      <i className="fas fa-download me-2"></i>
                      Free Download!
                  </a>
              </div>
          </div>
      </section>
      <footer className="footer text-center">
          <div className="container">
              <div className="row">
                  <div className="col-lg-4 mb-5 mb-lg-0">
                      <h4 className="text-uppercase mb-4">Location</h4>
                      <p className="lead mb-0">
                          2215 John Daniel Drive
                          <br />
                          Clark, MO 65243
                      </p>
                  </div>
                  <div className="col-lg-4 mb-5 mb-lg-0">
                      <h4 className="text-uppercase mb-4">Around the Web</h4>
                      <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-facebook-f"></i></a>
                      <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter"></i></a>
                      <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in"></i></a>
                      <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-dribbble"></i></a>
                  </div>
                  <div className="col-lg-4">
                      <h4 className="text-uppercase mb-4">About Freelancer</h4>
                      <p className="lead mb-0">
                          Freelance is a free to use, MIT licensed Bootstrap theme created by
                          <a href="http://startbootstrap.com">Start Bootstrap</a>
                          .
                      </p>
                  </div>
              </div>
          </div>
      </footer>
      <div className="copyright py-4 text-center text-white">
          <div className="container"><small>Copyright &copy; dabombdom.com 2021</small></div>
      </div>
      <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
          <div className="modal-dialog modal-xl">
              <div className="modal-content">
                  <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                  <div className="modal-body text-center pb-5">
                      <div className="container">
                          <div className="row justify-content-center">
                              <div className="col-lg-8">
                                  <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Birth</h2>
                                  <div className="divider-custom">
                                      <div className="divider-custom-line"></div>
                                      <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                      <div className="divider-custom-line"></div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                                      <a href="assets/img/birth/birth1.jpg" target="_blank">
                                        <img
                                          src={require('./img/birth/thumbnails/birth1_tn.jpg').default}
                                          className="w-100 shadow-1-strong rounded mb-4"
                                          alt="..."
                                        />
                                      </a>
                                      
                                      <a href="assets/img/birth/birth2.jpg" target="_blank">
                                        <img
                                          src={require('./img/birth/thumbnails/birth2_tn.jpg').default}
                                          className="w-100 shadow-1-strong rounded mb-4"
                                          alt="..."
                                        />
                                      </a>
                                    </div>

                                    <div className="col-lg-4 mb-4 mb-lg-0">
                                      <a href="assets/img/birth/birth3.jpg" target="_blank">
                                        <img
                                          src={require('./img/birth/thumbnails/birth3_tn.jpg').default}
                                          className="w-100 shadow-1-strong rounded mb-4"
                                          alt="..."
                                        />
                                      </a>

                                      <a href="assets/img/birth/birth4.jpg" target="_blank">
                                        <img
                                          src={require('./img/birth/thumbnails/birth4_tn.jpg').default}
                                          className="w-100 shadow-1-strong rounded mb-4"
                                          alt="..."
                                        />
                                      </a>
                                    </div>
                                    
                                    <div className="col-lg-4 mb-4 mb-lg-0">
                                      <a href="assets/img/birth/birth5.jpg" target="_blank">
                                        <img
                                          src={require('./img/birth/thumbnails/birth5_tn.jpg').default}
                                          className="w-100 shadow-1-strong rounded mb-4"
                                          alt="..."
                                        />
                                      </a>

                                      <a href="assets/img/birth/birth6.jpg" target="_blank">
                                        <img
                                          src={require('./img/birth/thumbnails/birth6_tn.jpg').default}
                                          className="w-100 shadow-1-strong rounded mb-4"
                                          alt="..."
                                        />
                                      </a>
                                    </div>
                                  </div>
                                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                  <button className="btn btn-primary" type="button" data-bs-dismiss="modal" aria-label="Close">
                                      <i className="fas fa-times fa-fw"></i>
                                      Close Window
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" aria-labelledby="portfolioModal2" aria-hidden="true">
          <div className="modal-dialog modal-xl">
              <div className="modal-content">
                  <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                  <div className="modal-body text-center pb-5">
                      <div className="container">
                          <div className="row justify-content-center">
                              <div className="col-lg-8">
                                  <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Baptism</h2>
                                  <div className="divider-custom">
                                      <div className="divider-custom-line"></div>
                                      <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                      <div className="divider-custom-line"></div>
                                  </div>
                                  <p>No photos to show</p>
                                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                  <button className="btn btn-primary" type="button" data-bs-dismiss="modal" aria-label="Close">
                                      <i className="fas fa-times fa-fw"></i>
                                      Close Window
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" aria-labelledby="portfolioModal3" aria-hidden="true">
          <div className="modal-dialog modal-xl">
              <div className="modal-content">
                  <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                  <div className="modal-body text-center pb-5">
                      <div className="container">
                          <div className="row justify-content-center">
                              <div className="col-lg-8">
                                  <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Home Life</h2>
                                  <div className="divider-custom">
                                      <div className="divider-custom-line"></div>
                                      <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                      <div className="divider-custom-line"></div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                                      <a href="assets/img/home/home1.jpg" target="_blank">
                                        <img
                                          src={require('./img/home/thumbnails/home1_tn.jpg').default}
                                          className="w-100 shadow-1-strong rounded mb-4"
                                          alt="..."
                                        />
                                      </a>

                                      <a href="assets/img/home/home2.jpg" target="_blank">
                                        <img
                                          src={require('./img/home/thumbnails/home2_tn.jpg').default}
                                          className="w-100 shadow-1-strong rounded mb-4"
                                          alt="..."
                                        />
                                      </a>
                                    </div>

                                    <div className="col-lg-4 mb-4 mb-lg-0">
                                      <a href="assets/img/home/home3.jpg" target="_blank">
                                        <img
                                          src={require('./img/home/thumbnails/home3_tn.jpg').default}
                                          className="w-100 shadow-1-strong rounded mb-4"
                                          alt="..."
                                        />
                                      </a>

                                      <a href="assets/img/home/home4.jpg" target="_blank">
                                        <img
                                          src={require('./img/home/thumbnails/home4_tn.jpg').default}
                                          className="w-100 shadow-1-strong rounded mb-4"
                                          alt="..."
                                        />
                                      </a>
                                    </div>
                                    
                                    <div className="col-lg-4 mb-4 mb-lg-0">
                                      <a href="assets/img/home/home5.jpg" target="_blank">
                                        <img
                                          src={require('./img/home/thumbnails/home5_tn.jpg').default}
                                          className="w-100 shadow-1-strong rounded mb-4"
                                          alt="..."
                                        />
                                      </a>

                                      <a href="assets/img/home/home6.jpg" target="_blank">
                                        <img
                                          src={require('./img/home/thumbnails/home6_tn.jpg').default}
                                          className="w-100 shadow-1-strong rounded mb-4"
                                          alt="..."
                                        />
                                      </a>
                                    </div>
                                  </div>
                                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                  <button className="btn btn-primary" type="button" data-bs-dismiss="modal" aria-label="Close">
                                      <i className="fas fa-times fa-fw"></i>
                                      Close Window
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" aria-labelledby="portfolioModal4" aria-hidden="true">
          <div className="modal-dialog modal-xl">
              <div className="modal-content">
                  <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                  <div className="modal-body text-center pb-5">
                      <div className="container">
                          <div className="row justify-content-center">
                              <div className="col-lg-8">
                                  <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Birthdays</h2>
                                  <div className="divider-custom">
                                      <div className="divider-custom-line"></div>
                                      <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                      <div className="divider-custom-line"></div>
                                  </div>
                                  <p>No photos to show</p>
                                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                  <button className="btn btn-primary" type="button" data-bs-dismiss="modal" aria-label="Close">
                                      <i className="fas fa-times fa-fw"></i>
                                      Close Window
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" aria-labelledby="portfolioModal5" aria-hidden="true">
          <div className="modal-dialog modal-xl">
              <div className="modal-content">
                  <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                  <div className="modal-body text-center pb-5">
                      <div className="container">
                          <div className="row justify-content-center">
                              <div className="col-lg-8">
                                  <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Holidays</h2>
                                  <div className="divider-custom">
                                      <div className="divider-custom-line"></div>
                                      <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                      <div className="divider-custom-line"></div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                                      {/*-- <a href="assets/img/holiday/holiday1.jpg" target="_blank">
                                        <img
                                          src={require('./img/holiday/thumbnails/holiday1_tn.jpg').default}
                                          className="w-100 shadow-1-strong rounded mb-4"
                                          alt="First Days"
                                        />
                                      </a> */}
                                      
                                      <a href="assets/img/holiday/holiday2.jpg" target="_blank">
                                        <img
                                          src={require('./img/holiday/thumbnails/holiday2_tn.jpg').default}
                                          className="w-100 shadow-1-strong rounded mb-4"
                                          alt="With big sister Fiona"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                  <button className="btn btn-primary" type="button" data-bs-dismiss="modal" aria-label="Close">
                                      <i className="fas fa-times fa-fw"></i>
                                      Close Window
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" aria-labelledby="portfolioModal6" aria-hidden="true">
          <div className="modal-dialog modal-xl">
              <div className="modal-content">
                  <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                  <div className="modal-body text-center pb-5">
                      <div className="container">
                          <div className="row justify-content-center">
                              <div className="col-lg-8">
                                  <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Playtime</h2>
                                  <div className="divider-custom">
                                      <div className="divider-custom-line"></div>
                                      <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                      <div className="divider-custom-line"></div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                                      <a href="assets/img/playtime/playtime1.jpg" target="_blank">
                                        <img
                                          src={require('./img/playtime/thumbnails/playtime1_tn.jpg').default}
                                          className="w-100 shadow-1-strong rounded mb-4"
                                          alt="..."
                                        />
                                      </a>

                                      <a href="assets/img/playtime/playtime2.jpg" target="_blank">
                                        <img
                                          src={require('./img/playtime/thumbnails/playtime2_tn.jpg').default}
                                          className="w-100 shadow-1-strong rounded mb-4"
                                          alt="..."
                                        />
                                      </a>
                                    </div>

                                    <div className="col-lg-4 mb-4 mb-lg-0">
                                      <a href="assets/img/playtime/playtime3.jpg" target="_blank">
                                        <img
                                          src={require('./img/playtime/thumbnails/playtime3_tn.jpg').default}
                                          className="w-100 shadow-1-strong rounded mb-4"
                                          alt="..."
                                        />
                                      </a>

                                      <a href="assets/img/playtime/playtime4.jpg" target="_blank">
                                        <img
                                          src={require('./img/playtime/thumbnails/playtime4_tn.jpg').default}
                                          className="w-100 shadow-1-strong rounded mb-4"
                                          alt="..."
                                        />
                                      </a>
                                    </div>
                                    
                                    <div className="col-lg-4 mb-4 mb-lg-0">
                                      <a href="assets/img/playtime/playtime5.jpg" target="_blank">
                                        <img
                                          src={require('./img/playtime/thumbnails/playtime5_tn.jpg').default}
                                          className="w-100 shadow-1-strong rounded mb-4"
                                          alt="..."
                                        />
                                      </a>

                                      <a href="assets/img/playtime/playtime6.jpg" target="_blank">
                                        <img
                                          src={require('./img/playtime/thumbnails/playtime6_tn.jpg').default}
                                          className="w-100 shadow-1-strong rounded mb-4"
                                          alt="..."
                                        />
                                      </a>
                                    </div>
                                  </div>
                                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                  <button className="btn btn-primary" type="button" data-bs-dismiss="modal" aria-label="Close">
                                      <i className="fas fa-times fa-fw"></i>
                                      Close Window
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
