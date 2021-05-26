import dynamic from 'next/dynamic'
const ReactApexCharts = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const SkillBarChart = ({ skillCount }) => {
  const data = {
    series: [
      {
        data: Object.values(skillCount),
      },
    ],
    options: {
      chart: {
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
        column: {
          pointPadding: 1000,
          borderWidth: 0,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: Object.keys(skillCount),
      },
    },
    markers: {
      size: 0,
    },
  }

  console.log(Object.keys(skillCount).length)
  const height = Object.keys(skillCount).length * 15

  return (
    <ReactApexCharts
      options={data.options}
      series={data.series}
      type="bar"
      height={height}
      width="100%"
    />
  )
}

export default SkillBarChart
