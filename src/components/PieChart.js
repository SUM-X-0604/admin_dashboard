import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart, Tooltip, ArcElement, Title, Legend } from 'chart.js';
Chart.register(
    Tooltip, ArcElement, Title, Legend
);

const data = {
    datasets: [{
        data: [203, 99, 263, 346, 50],
        backgroundColor: [
            'gray',
            'yellow',
            'green',
            'blue',
            'red'
        ],
    },
    ],
    labels: [
        'Pending',
        'Processing',
        'Ready To Deliver',
        'Deliverd',
        'Returned',
    ],

};


const PieChart = () => {
    return (
        <>
            <div className='flex items-center justify-center py-4 px-4'>
                <Doughnut data={data} />
            </div>
        </>
    )
}

export default PieChart