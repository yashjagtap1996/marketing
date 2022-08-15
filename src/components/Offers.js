import React from 'react'

const Offers = () => {

    let offer_data=[
        {
            heading:"Design",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque laudantium non. Harum, perspiciatis architecto?",
            colour:"#F0F0F0",
            text:"dark"
        },
        {
            heading: "Branding",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque laudantium non. Harum, perspiciatis architecto?",
            colour: "#E0E0E0",
            text: "dark"
        },
        {
            heading: "Consultation",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque laudantium non. Harum, perspiciatis architecto?",
            colour: "#989898",
            text: "light"
        },
        {
            heading: "Promises",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque laudantium non. Harum, perspiciatis architecto?",
            colour: "#303030",
            text: "light"
        }
    ]

  return (
    <>
          <div className="container mt-5" id='Offers' data-aos="fade-right">
            <div className="row">
                  <h1 className='text-center mb-4'><u>What We Offer</u></h1>
                {
                    offer_data.map((e)=>{
                        return (
                            <>
                                <div className={`col-md-6 col-xxl-3 mb-4 text-${e.text}`}>
                                    <div className="card mx-auto" style={{ width: '18rem', backgroundColor: e.colour }}>
                                        
                                            <div className="card-body">
                                                <h5 className="card-title">{e.heading}</h5>
                                                <p className="card-text">{e.content}</p>
                                            </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
                
            </div>
        </div>
    </>
  )
}

export default Offers
