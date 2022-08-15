import React from 'react'

const Contact = () => {
  return (
    <>
        <div className="container mt-5" id='Contact'>
            <div className="row justify-content-center">
                <div className="col-md-10">
                      <form>
                          <div className="row mb-3">
                              <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                              <br />
                              <div className="col-sm-10">
                                  <input type="text" className="form-control" id="inputEmail3" />
                              </div>
                          </div>
                          <div className="row mb-3">
                              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                              <br />
                              <div className="col-sm-10">
                                  <input type="email" className="form-control" id="inputEmail3" />
                              </div>
                          </div>
                          <div className="row mb-3">
                              <label htmlFor="inputSubject" className="col-sm-2 col-form-label">Subject</label>
                              <br />
                              <div className="col-sm-10">
                                  <input type="text" className="form-control" id="inputEmail3" />
                              </div>
                          </div>
                          <div className="row mb-3">
                              <label htmlFor="inputMessage" className="col-sm-2 col-form-label">Message</label>
                              <br />
                              <div className="col-sm-10">
                                  <input type="text" className="form-control" id="inputEmail3" />
                              </div>
                          </div>
                          
                          
                          
                          <button type="submit" className="btn btn-primary">Sign in</button>
                      </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact
