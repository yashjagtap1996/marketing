import React from 'react'

const Pricings = () => {

    let pricing_data=[
        {
            head:"Basic",
            storage:"10gb storage",
            email:"10 Emails",
            domain:"10 Domains",
            endless:"Endless Support",
            price:"$ 10",
            colour:"dark",
            text:"light"
        },
        {
            head: "Pro",
            storage: "25gb storage",
            email: "20 Emails",
            domain: "15 Domains",
            endless: "Endless Support",
            price: "$ 25",
            colour: "secondary",
            text: "dark"


        },
        {
            head: "Premium",
            storage: "50gb storage",
            email: "20 Emails",
            domain: "20 Domains",
            endless: "Endless Support",
            price: "$ 50",
            colour: "dark",
            text: "light"

        
        }
    ]

  return (
    <>
          <div className="container" id='Pricing'>
              <div className="row justify-content-center">
                <h1 className='text-center'>Pricing Plan</h1>
                <p className='text-center mb-5'>Choose a pricing plan that fits your needs.</p>
                {
                    pricing_data.map((e)=>{
                        return (
                            <>
                                <div className="col-md-3 mb-4"  >
                                    <ul className="list-group text-center shadow">
                                        <li className={`list-group-item bg-${e.colour} text-${e.text}`}>{e.head}</li>
                                        <li className="list-group-item">{e.storage}</li>
                                        <li className="list-group-item">{e.email}</li>
                                        <li className="list-group-item">Endless Support</li>
                                        <li className="list-group-item">{e.price} <br />per month</li>
                                        <li className="list-group-item"><button className='btn btn-success p-2'>Sign Up</button></li>


                                    </ul>
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

export default Pricings
