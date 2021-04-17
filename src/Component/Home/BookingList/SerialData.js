import React from 'react';
import './SerialData.css';
const SerialData = ({ allBooking }) => {
    return (
        <section >
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Course</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allBooking.map(book =>
                            <tr>
                                <td>{book.name}</td>
                                <td>{book.course}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </section>
    );
};

export default SerialData;