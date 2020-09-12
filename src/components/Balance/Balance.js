import React, {Component} from 'react';
import TotalBalance from './TotalBalance';

class Balance extends Component{
    state = {
        total: "2000"
    };

    render(){
        return(
            <div className="balance-wrapper">
                <div>Balance</div>
                <TotalBalance total={this.state.total} />
            </div>
        )
    }
}
export default Balance;