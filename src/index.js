import { Chart, registerables } from 'chart.js';
import { Grid } from 'ag-grid-community';

import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';

var gridOptions = {
	columnDefs: [
    {headerName: '#', field: 'id'},
		{ headerName: 'Nama', field: 'name', },
		{ headerName: 'Jenis', field: 'type' },
		{ headerName: 'Harga Produksi', field: 'productionPrice'},
    { headerName: 'Harga Jual', field: 'sellingPrice'},
	],
	rowData: [
		{ id: 1 ,name: 'Kopi Susu', type: 'Minuman', productionPrice: 12000, sellingPrice: 24000 },
		{ id: 2 ,name: 'Ayam Geprek', type: 'Makanan', productionPrice: 12000, sellingPrice: 24000},
		{ id: 3 ,name: 'Susu', type: 'Minuman', productionPrice: 6000, sellingPrice: 12000}
	],
};


var eGridDiv = document.querySelector('#myGrid');
const {api, columnApi} = new Grid(eGridDiv, gridOptions).gridOptions;
api.sizeColumnsToFit()
columnApi.autoSizeColumns()

Chart.register(...registerables);

const ctx = document.getElementById('myChart');
const doughnut = document.getElementById('doughnut');
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu'];
const Linedata = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};
const Lineconfig = {
    type: 'line',
    data: Linedata,
  };
new Chart(ctx, Lineconfig);

const data = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};

const config = {
    type: 'pie',
    data: data,
};

new Chart(doughnut, config);