import React, { Component } from 'react';

class ChargesCategories extends Component{
    render(){
        return(
            <div>
                <div className="categories-header">
                    <span>My Categories</span>
                    <button className="add-btn">Add More</button>
                </div>
                <div className="table-wrapper">
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
                                <td>Food</td>
                                <td>Shopping, restaurants</td>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td>Home</td>
                                <td>Household expenses, repairs, furniture</td>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td>Car</td>
                                <td>Fuel, service, insurance</td>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td>Pets</td>
                                <td>Pet's food, toys, supplies, healthcare</td>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td>Health</td>
                                <td>Fitness, doctor's appointment, meds, vitamines</td>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td>Clothes</td>
                                <td></td>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td>Utility bills</td>
                                <td></td>
                                <td>...</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ChargesCategories;