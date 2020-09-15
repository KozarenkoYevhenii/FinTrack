import React, { Component } from 'react';

class IncomesCategories extends Component{
    render(){
        return(
            <div>
                <div className="categories-header">
                    <span>My Categories</span>
                    <button className="add-btn">Add More</button>
                </div>
                <table className="categories-table">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Salary</td>
                            <td></td>
                            <td>...</td>
                        </tr>
                        <tr>
                            <td>Part-time freelance</td>
                            <td></td>
                            <td>...</td>
                        </tr>
                        <tr>
                            <td>Selling unnecessary staff</td>
                            <td></td>
                            <td>...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default IncomesCategories;