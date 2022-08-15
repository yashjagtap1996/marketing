import React from 'react'

const Ceo = () => {

    let ceo_data=[
        {
            photo:"images/pexels-sora-shimazaki-5668886.jpg",
            name:"Mike Ross",
            designation:"Art Director",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nam sit? Commodi ea veritatis dolores?",
            column:6,
            Height: "250px"

        },
        {
            photo: "images/pexels-tiger-lily-7109087.jpg",
            name: "John Doe",
            designation: "Designer",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nam sit? Commodi ea veritatis dolores?",
            column: 6,
            Height: "250px"


        },
        {
            photo: "images/pexels-edmond-dantès-4342352.jpg",
            name: "Jane Doe",
            designation: "Ceo & Founder",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nam sit? Commodi ea veritatis dolores?",
            column: 12,
            Height:"250px"

        }
    ]

  return (
    <>
        <div className="container mt-5" id='Ceo'>
            <div className="row justify-content-center">
                {
                    ceo_data.map((e)=>{
                        return (
                            <>
                                <div className={`col-md-${e.column} col-xxl-3 mb-4`}>
                                    <div className="card mx-auto" style={{width: '100%'}}>
                                        <img src={e.photo} className="card-img-top" alt="..." height={e.Height} />
                                            <div className="card-body">
                                                <h5 className="card-title">{e.name}</h5>
                                                <p className="card-text">{e.designation}</p>
                                                <p className="card-text">{e.content}</p>
                                                <a href="#" className="btn btn-primary">Contact</a>
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

export default Ceo
