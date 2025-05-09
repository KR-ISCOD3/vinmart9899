import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'

function Menu() {
    const menuItems = [
        {
            id: 1,
            title: "Coffee",
            khmer: "ធ្យូង",
            price: "$1.50",
            image: "https://z-p3-scontent.fpnh5-1.fna.fbcdn.net/v/t39.30808-6/478322460_122143412204443470_2308102078004131801_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEixAshlx4zMWmi2GwRzcQcxauzbesUpiDFq7Nt6xSmIATloUqPnKWW1yHClIbuUSkGnQ6Cs7U0k6tQ6RN_v5_D&_nc_ohc=xq2bTBT7M9YQ7kNvwErjLZb&_nc_oc=Adkj270xT6kMKp02JE1837opOVdhEkpLSSrhTbc6q2By4UOgZWSR8-ZDjz5U_VY2zFs&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-1.fna&_nc_gid=TcoDt6evRP8zoo2aP57zAg&oh=00_AfJShZl0r9KS5NtAe9OWjy7TzCtsEmol0gKKFYYeguj42Q&oe=6823712B",
        },
        {
            id: 2,
            title: "Macha Latte",
            price: "$1.50",
            image: "https://z-p3-scontent.fpnh5-1.fna.fbcdn.net/v/t39.30808-6/470885535_122175318392113482_2765683447338169251_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEqqc7xXn6mt2HmfzwFKTrLZbzwOCUodL5lvPA4JSh0vizeJMtIYJdT2bM9_b_R4klT-87JvxAWPd_2y5x88aOb&_nc_ohc=BJpVJhz61BMQ7kNvwG0UzOm&_nc_oc=AdmscWfMmEmUQOC0j1gOY4k-VqHnL-ZS_kirkP_1XcnNCSwjyReU1IPNuemvanPUsds&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-1.fna&_nc_gid=0AgMSVXfGHMBgvMaZzNA5A&oh=00_AfIPKzYXXdVjLvH1XiRCsV3_IwZDvPVFrwgYkidP2UPQiA&oe=68237069",
        },
        {
            id: 3,
            title: "MachaStrawberry",
            price: "$1.59",
            image: "https://z-p3-scontent.fpnh5-1.fna.fbcdn.net/v/t39.30808-6/471112554_122175317966113482_7472483359746110_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF6xl7-it2luqI7vHRCnboofHbosPBKDIR8duiw8EoMhOmGKbCH_YxeeB_ZyPrGIKYc0HMg660CJYAWZaXqf3YW&_nc_ohc=rMjUeZRc8gQQ7kNvwFTYZni&_nc_oc=AdmfLBAziST51wm8mNZKUhUe9mXOgE71b3X9gOj2BahTIAe8pDU9ty1SzzX6FnO9VuA&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-1.fna&_nc_gid=ebdakhqF_Mt9T85-5ZpELg&oh=00_AfJCZT4r86mfr_aUK48IcQ-LPDoW40SF6TDBOAXIBLFIzQ&oe=68238257",
        },
        {
            id: 4,
            title: "Macha Coffee",
            // khmer: "កាហ្វេទឹកកក",
            price: "$2.00",
            image: "https://z-p3-scontent.fpnh5-5.fna.fbcdn.net/v/t39.30808-6/471157733_122175318434113482_7525403425243809631_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEFPpcZbd6kUx5tZ4PvhPo6MtsJl-wzT2sy2wmX7DNPaw_3H7JCulNuOcHerHDdclbveImaj1KOjh0tvDhl670y&_nc_ohc=KhJL5AP1_d4Q7kNvwEsIxHt&_nc_oc=Adl7bdi1BWnrLk96sLEM8Q_IpKaC4KcdJ1Dhzh6LOC1enqrwmXUaXWI_-KqWgJWIwYo&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-5.fna&_nc_gid=6nRxkUoHVfzUSDfzJobUXA&oh=00_AfLoFmf1EKqNcUwGCvkj27SEPTADBAjZ7eBwJe0CwPGtrg&oe=682372F5",
        },
        {
            id: 5,
            title: "Coffee Cream",
            // khmer: "កាហ្វេកាប់ពុយស៊ីណូ",
            price: "$2.20",
            image: "https://images.deliveryhero.io/image/fd-kh/Products/3462563.jpg?width=%s",
        },
        {
            id: 6,
            title: "Coffee",
            khmer: "ដូង",
            price: "$1.80",
            image: "https://images.deliveryhero.io/image/fd-kh/Products/3656897.jpg?width=%s",
        },
        {
            id: 7,
            title: "Chocolate Ice",
            // khmer: "តែបៃតង",
            price: "$1.70",
            image: "https://images.deliveryhero.io/image/fd-kh/Products/3372395.jpg?width=%s",
        },
        {
            id: 8,
            title: "Cappucino",
            // khmer: "នំប៉័ងខ្រូសង់",
            price: "$1.30",
            image: "https://images.deliveryhero.io/image/fd-kh/Products/3510539.jpg?width=%s",
        },
        {
            id: 9,
            title: "CoffeeStrawbarry",
            price: "$1.30",
            image: "https://images.deliveryhero.io/image/fd-kh/Products/3372402.jpg?width=%s",
        },
    ];
    
      
  return (
    <div className='container-fluid font-text'>
     <div className="container py-4 ">
        <div className='text-center'>
            <span className='fs-1 border-bottom border-2 border-dark'>
                OurMenu
            </span>
        </div>
       
        <ul className="nav justify-content-center nav-pills mb-3 mt-4" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="btn rounded-0 fs-5 active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" >
                    Specail Order
                </button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="btn rounded-0 fs-5" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab">
                    Coffee
                </button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="btn rounded-0 fs-5" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab">
                    Milk Drink
                </button>
            </li>
        </ul>
 
        <div className="tab-content mt-4 pt-2" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" >
            <div className="row">
                {menuItems.map((item) => (
                    <div key={item.id} className="col-12 col-md-6 col-lg-4 px-2 my-2">
                        <div className="bg-body d-flex align-items-center border border-5 border-light">
                            <div style={{ height: 130, width: 250 }}>
                                <img
                                    className="w-100 h-100 object-fit-cover"
                                    src={item.image}
                                    alt={item.title}
                                />
                            </div>
                            <div className="w-100 h-100 m-3">
                                <p className="mt-2 text-secondary mb-0">CoffeeCorner-DeyHoy</p>
                                <h4 className="fs-3 m-0">
                                    {item.title} <span className="font-khmer">{item.khmer}</span>
                                </h4>
                                <p className="m-0 text-coffee-900 fw-bold fs-5">{item.price}</p>
                            </div>
                            <button
                                className="me-4 btn fs-5 btn-outline-dark rounded-0"
                                title="Add To Cart"
                            >
                                <FaCartShopping />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" >
                hi
            </div>
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" >
                hri
            </div>
            
        </div>
     </div>
    </div>
  )
}

export default Menu
