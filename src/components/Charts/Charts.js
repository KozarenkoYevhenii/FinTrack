import React from 'react';
import IncomesChart from './Summary/Incomes';
import Summary from './Summary/Summary';
import './Charts.css';
import ChargesChart from './Summary/Charges';

function Charts() {
    return (
        <div>
            <Summary />
            <IncomesChart />
            <ChargesChart />
        </div>
    )
}

export default Charts;