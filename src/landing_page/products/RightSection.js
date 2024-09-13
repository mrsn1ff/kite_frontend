import React from 'react';

function RightSection({
    productName ,
    productDescription , 
    learnMore ,
    imageURL
    }) {
    return (
        <div className='container mt-5 '>
            <div className='row align-items-center'>
                <div className='col-6 p-5 my-3'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className='my-3'>
                        <a href={learnMore} style={{textDecoration:"none"}}>Learn more<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div className='col-6 p-5 justify-content-start'>
                    <img src={imageURL}  alt={productName} className="img-fluid"/>
                </div>   
            </div>
        </div>
    );
}

export default RightSection;