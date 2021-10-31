import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner';
import './Home.css'

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <div className="experience container">
                <h1>Live unforgettable experiences</h1>
                <p className="w-75 mx-auto">h its unique cuisine, rich culture, some of the most beautiful beaches in the world, breathtaking waterfalls, and adventure for everyone’s liking, all you have to do is choose the perfect type of tourism for you and be amazed by the wonders of world</p>
            </div>

           <div className="service mb-5 mt-5">
           <Services />
           </div>
            {/* photo galary */}


            <div className="mb-5 pb-5">
                  
            <div className="experience container">
                <h1>Some Of Natural Place</h1>
                <p className="w-75 mx-auto">h its unique cuisine, rich culture, some of the most beautiful beaches in the world, breathtaking waterfalls, and adventure for everyone’s liking, all you have to do is choose the perfect type of tourism for you and be amazed by the wonders of world</p>
            </div>

            <div className="row row-cols-1 row-cols-md-2 g-4  galary">
                <div className="col">
                    <div className="card-custom ">
                        <img src="https://chopra.brightspotcdn.com/dims4/default/dfb2b37/2147483647/strip/true/crop/571x300+36+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Fchopra-brightspot.s3.amazonaws.com%2F61%2Fcc%2F9b0ff8c8aaba0ff21eafee50293c%2F6reasonswhytravelingisgoodforyou.jpg" className="card-img-top" alt="..." />
                    </div>
                </div>
                <div className="col">
                    <div className="card-custom">
                        <img src="https://content.thriveglobal.com/wp-content/uploads/2021/08/traveling-is-good-for-your-mental-health.jpg?w=1180" className="card-img-top" alt="..."/>
                      
                    </div>
                </div>
                <div className="col">
                    <div className="card-custom">
                        
                        <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fnomanazish%2Ffiles%2F2018%2F01%2Ftravel-1749508_1280-1200x766.jpg" className="card-img-top" alt="..."/>
                      
                    </div>
                </div>
                <div className="col">
                    <div className="card-custom">
                        <img  src="https://www.expatica.com/app/uploads/sites/5/2014/05/10-best-places-to-visit-in-France-1920x1080.jpg" className="card-img-top" alt="..."/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Home;