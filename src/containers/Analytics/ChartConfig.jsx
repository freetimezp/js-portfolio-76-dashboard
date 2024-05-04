import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    Filler,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip
} from "chart.js";
import { faker } from "@faker-js/faker";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    BarElement
);

const days = [
    'Jan 19, 2024',
    'Jan 20, 2024',
    'Jan 21, 2024',
    'Jan 22, 2024',
    'Jan 23, 2024',
    'Jan 24, 2024',
    'Jan 25, 2024',
    'Jan 26, 2024',
    'Jan 27, 2024',
    'Jan 28, 2024',
    'Jan 29, 2024',
    'Jan 30, 2024',
    'Jan 31, 2024',
    'Feb 01, 2024',
    'Feb 02, 2024',
    'Feb 03, 2024',
    'Feb 04, 2024',
    'Feb 05, 2024',
    'Feb 06, 2024',
    'Feb 07, 2024',
    'Feb 08, 2024',
    'Feb 09, 2024',
    'Feb 10, 2024',
    'Feb 11, 2024',
    'Feb 12, 2024',
    'Feb 13, 2024',
    'Feb 14, 2024',
    'Feb 15, 2024',
    'Feb 16, 2024',
    'Feb 17, 2024',
    'Feb 18, 2024',
    'Feb 19, 2024',
    'Feb 20, 2024',
    'Feb 21, 2024',
    'Feb 22, 2024',
    'Feb 23, 2024',
    'Feb 24, 2024',
    'Feb 25, 2024',
    'Feb 26, 2024',
    'Feb 27, 2024',
    'Feb 28, 2024',
    'Feb 29, 2024',
    'Mar 01, 2024',
    'Mar 02, 2024',
    'Mar 03, 2024',
    'Mar 04, 2024',
    'Mar 05, 2024',
    'Mar 06, 2024',
    'Mar 07, 2024',
    'Mar 08, 2024',
    'Mar 09, 2024',
    'Mar 10, 2024',
    'Mar 11, 2024',
    'Mar 12, 2024',
    'Mar 13, 2024',
    'Mar 14, 2024',
];

export const mainChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            position: 'right',
            ticks: {
                maxTicksLimit: 6,
            }
        },
        x: {
            grid: {
                display: false,
            },
            ticks: {
                maxTicksLimit: 4,
                align: 'inner',
            }
        }
    },
    point: false,
    elements: {
        point: {
            pointStyle: false,
        },
        line: {
            borderColor: 'rgb(95, 158, 199)',
            fill: true,
            borderWidth: 1.5,
        }
    }
};


export const getMainChartData = () => {
    return {
        labels: days,
        datasets: [
            {
                label: 'Value',
                data: days.map(() => faker.datatype.number({ min: 450, max: 1000 })),
                backgroundColor: 'rgba(161, 207, 237, 0.5)',
                animation: false,
            }
        ],
    }
};

const realtimeChartLabels = [
    '-48h',
    '-47h',
    '-46h',
    '-45h',
    '-44h',
    '-43h',
    '-42h',
    '-41h',
    '-40h',
    '-39h',
    '-38h',
    '-37h',
    '-36h',
    '-35h',
    '-34h',
    '-33h',
    '-32h',
    '-31h',
    '-30h',
    '-29h',
    '-28h',
    '-27h',
    '-26h',
    '-25h',
    '-24h',
    '-23h',
    '-22h',
    '-21h',
    '-20h',
    '-19h',
    '-18h',
    '-17h',
    '-16h',
    '-15h',
    '-14h',
    '-13h',
    '-12h',
    '-11h',
    '-10h',
    '-9h',
    '-8h',
    '-7h',
    '-6h',
    '-5h',
    '-4h',
    '-3h',
    '-2h',
    '-1h',
    'Now'
];

export const realtimeChartData = {
    labels: realtimeChartLabels,
    datasets: [
        {
            label: 'Views',
            data: realtimeChartLabels.map(() => faker.datatype.number({ min: 30, max: 90 })),
            backgroundColor: 'rgb(95, 158, 199)',
        }
    ]
};

export const realtimeChartOptions = {
    labels: realtimeChartLabels,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            display: false,
        },
        x: {
            grid: {
                display: false,
            },
            ticks: {
                callback: (label, index) => (index === 0 || index === 47) ? realtimeChartLabels[index] : null,
                autoSkip: false,
                align: 'inner',
            }
        }
    },
};