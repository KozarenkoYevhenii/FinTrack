import React, { Component } from 'react';
import './Home.css';
import Charges from './Charges';
import Incomes from './Incomes';
import { Route, Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import NewCharge from '../New Charge/New Charge';
import NewIncome from '../New Income/New Income';

class Home extends Component {
    render(){
        return(
            <div className="home-page">
                <div className="charges-incomes-wrapper">
                    <div className="charges-incomes">
                        {/* Charges */}
                        <NavLink to="/home/charges">Charges</NavLink>
                    </div>
                    <div className="charges-incomes">
                        {/* Incomes */}
                        <NavLink to="/home/incomes">Incomes</NavLink>
                    </div>
                </div>
                <div>
                    <Route exact path="/home">
                        <Redirect to="/home/charges" />
                    </Route>
                    <Route path="/home/charges" component={Charges} />
                    <Route path="/home/incomes" component={Incomes} />
                    <Route path="/home/newCharges" component={NewCharge} />
                    <Route path="/home/newIncomes" component={NewIncome} />
                </div>
                {/* <div className="select-panel">
                    <label>
                        <span>My Charges</span>
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
                        <td>Food</td>
                        <td></td>
                        <td>12/09/2020</td>
                        <td>$13</td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td>Clothes</td>
                        <td></td>
                        <td>11/09/2020</td>
                        <td>$22</td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td>Restoraunts</td>
                        <td>Dinner with John</td>
                        <td>10/09/2020</td>
                        <td>$12</td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td>Pets</td>
                        <td></td>
                        <td>02/08/2020</td>
                        <td>$15</td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td>Utility bills</td>
                        <td></td>
                        <td>21/08/2020</td>
                        <td>$10</td>
                        <td>...</td>
                    </tr>
                </table> */}
            </div>
        )
    }
        
}

export default Home;