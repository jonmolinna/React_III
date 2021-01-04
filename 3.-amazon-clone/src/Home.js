import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
                className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt=""
            />

            <div className="home__row">
                <Product 
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />
                <Product 
                    id="49538094"
                    title="Laptop MSI GL65 Leopard 10SFK-062, 15.6 pulgadas, full HD, 144Hz, 3ms, Intel Core i7-10750H"
                    price={1310.00}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/81ftUqDdYFL._AC_UY218_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                    id="4903850"
                    title="Apple iPad 9.7inch con WiFi 32GB- Space Gray (Modelo 2017)"
                    price={289.95}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71iCsEpE-xL._AC_UY218_.jpg"
                />
                <Product 
                    id="23445930"
                    title="Acer Aspire 5 Computadora portátil delgada, Windows 10 en modo S, A515-43-R19L, plateado"
                    price={11.96}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SX679_.jpg"
                /> 
                <Product 
                    id="3254354345"
                    title="Samsung Galaxy Watch 3 (45mm, GPS, Bluetooth) Smart Watch with Advanced Health Monitoring, Fitness Tracking."
                    price={369.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/41fx1KXjToL._AC_SR400,600_.jpg"
                /> 
            </div>

            <div className="home__row">
                <Product 
                    id="90829332"
                    title="Samsung QN32Q50RAFXZA Flat 32 pulgadas QLED 4K Serie 32Q50 Smart TV"
                    price={397.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/51NKhnjhpGL._AC_SX679_.jpg"
                /> 
            </div>

            

        </div>
    )
}

export default Home;