import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '../Button/Button';

class IncomesCategories extends Component{
    state = { addButtonClicked: false };
    rerouteToAddMore = () => {
        this.setState({ addButtonClicked: true });
    };
      render() {
      if (this.state.addButtonClicked) {return <Redirect to="/categories/newCharges" />}
        return(
            <div>
                <div className="categories-header">
                    <span>My Categories</span>
                    <Button name="add-btn" content="Add More" handler={this.rerouteToAddMore}/>
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