import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";


const Footer = () => {
  return (
    <>
        <div className="container-fluid p-5 bg-secondary mt-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>Footer</h1>
                    <button>To top</button>
                    <br />
                    <br />
                    <AiFillFacebook style={{fontSize:'30px'}} />
                    <AiFillInstagram style={{ fontSize: '30px' }} />
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
