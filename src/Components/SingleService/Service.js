import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from 'react-router'
import { useState } from 'react';
import { useEffect } from 'react';
import Rating from 'react-rating';

const Service = () => {
    let history = useHistory();
    let {serviceId} = useParams();
    // console.log(serviceId);
    
    // Load data from fake db json file 
    let [services, setServices] = useState([]);

    useEffect( () => {
        // Load Data Using Fetch Api 
        fetch('../../FakeData2.json')
        .then(response => response.json())
        .then(data => setServices(data));
    }, []);
    
    // Get single service using if statement and find method 
    if(services.length){
        let singleService = services.find(service => service.id === serviceId);
        if(singleService){
            setServices(singleService);
        }else{
            history.push("/");
        }
    }

    // Destructuring the single data value 
    let { service, author, regularFee, saleFee, AuhtorImage, video, rattingQuantity, thumbnail, duration, ratting, description } = services;

    // Enroll Button Validation 
    let handleEnrollBtn = () => {
        alert("I am currently working on it!");
    }
    return (
     <section>
      <div className="aboutUsArea">
        <div className="initialBanner">
            <div className="aboutPageWrapper">
             <div className="pageIntro">
                <h3 className="pageName">
                Single Service
                </h3>
                <span className="breadCrumb">
                    <Link className="homeLink" to="/home"> Home </Link> - <span className="pagePath">Single Service</span> - <span className="pagePath">{service}</span>
                </span>
             </div>
            </div>
        </div>
    </div>
     <div className="singleServiceArea">
         <div className="container">
             <div className="row">
                 <div className="col-lg-12 col-md-12 col-sm-12">
                     <div className="row singleService">
                         <div className="serviceImage col-lg-5 col-md-6 col-sm-12">
                             <img className="img-fluid mb-4" src={thumbnail} alt="singleServie" />
                         </div>
                         <div className="details px-4 col-lg-7 col-md-6 col-sm-12">
                             <h2 className="serviceTitle">{service}</h2>
                             <div className="dualInfo">
                             <span className="price"><b className="saleFee1">$ {saleFee}</b> <b className="regularfee1">$ {regularFee}</b> </span>
                             <span className="ratting1">
                             <Rating className="foodRatting" readonly
                                       initialRating={ratting}
                                       emptySymbol="far fa-star"
                                       fullSymbol="fas fa-star"
                               />({rattingQuantity})
                             </span>
                             </div><br />
                             <div className="dualInfo">
                             <span className="autorDet1"><img className="rounded-circle"  src={AuhtorImage} alt="helloAuthor"/> &nbsp;<b>{author}</b></span> 
                             <span className="durationtime1">Duration : {duration}</span>
                             </div><br />
                             <div className="dualInfo">
                             <span className="videoClass"><i className="fas fa-play-circle"></i>  Video : {video}</span>
                             <span onClick={ handleEnrollBtn } className="enrollBtn2">Admission now &nbsp; <i className="fas fa-arrow-right"></i></span>
                             </div><br />
                         </div>
                     </div><br />
                     <hr /><br />
                     <div className="serviceDescription">
                         <h2 className="tabTitle">Description</h2>
                         <p className="descPera">{description}</p>
                     </div>
                 </div>
             </div>
         </div>
     </div>
    </section>
    );
};

export default Service;