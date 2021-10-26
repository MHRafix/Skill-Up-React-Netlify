import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
import Card from '../CourseCard/Card';
import { useState } from 'react';
import { useEffect } from 'react';

const Services = () => {
        // Js dynamic dta load from fake data.json 
        let [courses, setCourses] = useState([]);
    
        // Use useEffect to load data from fakeData 
        useEffect( () => {
            // This data for latest course dispaly 
            fetch('./fakeData2.json')
            .then(response => response.json())
            .then(data => setCourses(data));
        }, []);
    return (
      <section>
        <div className="aboutUsArea">
        <div className="initialBanner">
            <div className="aboutPageWrapper">
             <div className="pageIntro">
                <h3 className="pageName">
                Our Services
                </h3>
                <span className="breadCrumb">
                    <Link className="homeLink" to="/home"> Home </Link> - <span className="pagePath">Services</span>
                </span>
             </div>
            </div>
        </div>
    </div>
    <div className="latestCorsesArea">
            <div className="container">
                <div className="headingopfArea">
                    <h1 className="heading mb-5">All Courses</h1> <br />
                </div>
                <div className="row">
                {
                    courses.map(course => <Card key={course.id} courseData={course} />)
                }
                </div>
            </div>
        </div>
    </section>
    );
};

export default Services;