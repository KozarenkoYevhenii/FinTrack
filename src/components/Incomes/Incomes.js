import React, { Component } from 'react';

export default class Charges extends Component {
    render(){
        return(
            <div>
                <div className="select-panel">
                    <label>
                        <span>My Incomes</span>
                        <select className="period-input">
                            <option value="whole-time">whole time</option>
                            <option value="month">this month</option>
                            <option value="week">this week</option>
                            <option value="day">today</option>
                        </select>
                    </label>
                    <button className="add-btn">Add More</button>
                </div>
                <table>
                    <tr>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Money</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>Salary</td>
                        <td></td>
                        <td>12/09/2020</td>
                        <td>$2000</td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td>Salary</td>
                        <td></td>
                        <td>11/08/2020</td>
                        <td>$2000</td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td>Salary</td>
                        <td></td>
                        <td>10/07/2020</td>
                        <td>$2000</td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td>OLX</td>
                        <td>Sold book</td>
                        <td>02/07/2020</td>
                        <td>$5</td>
                        <td>...</td>
                    </tr>
                </table>
            </div>
        )
    }
}