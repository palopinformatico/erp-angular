import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexDataLabels,
  ApexResponsive,
  ApexFill,
} from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  // Gráfico de barras
  barChart: {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    title: ApexTitleSubtitle;
  } = {
    series: [{ name: 'Ventas', data: [10, 20, 15, 25] }],
    chart: { type: 'bar', height: 300 },
    xaxis: { categories: ['Ene', 'Feb', 'Mar', 'Abr'] },
    title: { text: 'Gráfico de Barras' },
  };

  // Gráfico de líneas
  lineChart: {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    title: ApexTitleSubtitle;
  } = {
    series: [{ name: 'Crecimiento', data: [5, 15, 10, 20] }],
    chart: { type: 'line', height: 300 },
    xaxis: { categories: ['Q1', 'Q2', 'Q3', 'Q4'] },
    title: { text: 'Gráfico de Líneas' },
  };

  // Gráfico de pastel
  pieChart: {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    responsive: ApexResponsive[];
    title: ApexTitleSubtitle;
  } = {
    series: [44, 33, 23],
    chart: { type: 'pie', height: 300 },
    labels: ['A', 'B', 'C'],
    title: { text: 'Gráfico de Pastel' },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: { width: 200 },
          legend: { position: 'bottom' },
        },
      },
    ],
  };

  // Gráfico radial (donut)
  radialChart: {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    plotOptions: ApexPlotOptions;
    fill: ApexFill;
    labels: string[];
    title: ApexTitleSubtitle;
  } = {
    series: [70],
    chart: { type: 'radialBar', height: 300 },
    plotOptions: {
      radialBar: {
        hollow: { size: '70%' },
      },
    },
    fill: { colors: ['#20E647'] },
    labels: ['Progreso'],
    title: { text: 'Gráfico Radial' },
  };
}
