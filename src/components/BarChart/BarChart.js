// import ReactApexCharts from 'react-apexcharts'
import dynamic from 'next/dynamic'
const ReactApexCharts = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const data = {
  series: [
    {
      data: [
        400,
        430,
        448,
        470,
        540,
        580,
        690,
        1100,
        1200,
        1380,
        400,
        430,
        448,
        470,
        540,
        580,
        690,
        1100,
        1200,
        1380,
      ],
    },
  ],
  options: {
    chart: {
      type: 'bar',
      height: 350,
      width: '100%',
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        'South Korea',
        'Canada',
        'United Kingdom',
        'Netherlands',
        'Italy',
        'France',
        'Japan',
        'United States',
        'China',
        'Germany',
        'South Korea',
        'Canada',
        'United Kingdom',
        'Netherlands',
        'Italy',
        'France',
        'Japan',
        'United States',
        'China',
        'Germany',
      ],
    },
  },
}

const SkillBarChart = () => {
  return (
    <ReactApexCharts
      options={data.options}
      series={data.series}
      type="bar"
      // height={350}
      width="100%"
    />
  )
}

export default SkillBarChart
