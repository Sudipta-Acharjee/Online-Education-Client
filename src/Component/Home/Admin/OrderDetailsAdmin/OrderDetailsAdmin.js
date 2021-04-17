import React from 'react';

const OrderDetailsAdmin = ({allBooking}) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Email</th>
                    <th className="text-secondary" scope="col">Course</th>
                </tr>
            </thead>
            <tbody>
                {
                    allBooking.map(book =>
                        <tr>
                            <td>{book.name}</td>
                            <td>{book.email}</td>
                            <td>{book.course}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default OrderDetailsAdmin;