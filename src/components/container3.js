import React from 'react';
import Card from './Card';

function Container3() {
    return (
        <>
            <div className='containerNew3'>
                <h1 className='hone'>Latest Articles on Security</h1>
                <div id='first' style={{ display: "flex", marginLeft: "180px", marginTop: "80px", marginBottom:"80px" }}><a href='https://economictimes.indiatimes.com/news/india/womens-safety-6630-cameras-installed-in-vulnerable-areas-delhi-police-tells-hc/articleshow/102806248.cms' target='_blank' rel="noreferrer"><Card image="https://res.cloudinary.com/dbyioi2qq/q_auto/v1712207519/static/imagey3bn_1712207521_87059.jpg" text="6630 cameras installed in police stations as well as vulnerable areas, Delhi Police tells high court" textNew="Women Safety . 7 mins read" /></a>
                    <div style={{ marginLeft: "50px" }}><a href='https://www.nationalheraldindia.com/crime/rape-murder-of-student-in-mumbai-ncp-delegation-meets-dgp-demands-security-at-womens-hostels' target='_blank' rel="noreferrer"><Card image="https://res.cloudinary.com/dbyioi2qq/q_auto/v1712208457/static/imageyqop_1712208459_31452.jpg" text="NCP demands security at women's hostels over rape, murder of girl in Mumbai hostel" textNew="Women Safety . 7 mins read" /></a></div>
                    <div style={{ marginLeft: "50px" }}><a href='https://www.telegraphindia.com/my-kolkata/news/west-bengal-chief-minister-mamata-banerjee-launches-vehicle-location-control-centre-app-to-boost-security-for-women/cid/1909059' target='_blank' rel="noreferrer"><Card image="https://res.cloudinary.com/dbyioi2qq/q_auto/v1712208306/static/1671629054_mamatajpg_1712208307_99005.jpg" text="Mamata Banerjee launches vehicle location control centre, app to boost security for women" textNew="Women Safety . 7 mins read" /></a></div>
                    <div id={'mysaheli'} style={{ marginLeft: "50px" }}><a href='https://timesofindia.indiatimes.com/city/hubballi/swr-ensures-womens-safety-on-its-trains/articleshow/108720412.cms' target='_blank' rel="noreferrer"><Card image="https://res.cloudinary.com/dbyioi2qq/q_auto/v1712208374/static/image23io_1712208376_31878.jpg" text="My Saheli for women's safety on trains " textNew="Women Safety . 7 mins read" /></a></div>
                </div>
            </div>
        </>
    )
}


export default Container3;