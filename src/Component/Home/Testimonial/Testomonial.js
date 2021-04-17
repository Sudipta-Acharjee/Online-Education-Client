import React, { useEffect, useState } from 'react';

const Testomonial = ({allReview}) => {
    return (
        <div className="card shadow">
            <div className="card-body">
                {
                    allReview.map(Review => <ul>
                        <h3 className="card-text text-center">{Review.Description}</h3>
                        <h5 className="m-0">{Review.company}</h5>
                    </ul>)
                }
            </div>
        </div>
    );
};

export default Testomonial;