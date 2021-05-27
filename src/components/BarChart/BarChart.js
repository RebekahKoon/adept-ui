import dynamic from 'next/dynamic'
const ReactApexCharts = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const SkillBarChart = ({ skillCount, totalApplications }) => {
  console.log(Object.keys(skillCount).length)
  const totalSkills = Object.keys(skillCount).length
  const height = totalSkills * 15

  const skillData = Object.values(skillCount).map((value) =>
    (value = (value / totalApplications) * 100).toFixed(2)
  )

  console.log(skillData)

  const data = {
    series: [
      {
        data: skillData,
        name: 'Percent on your applications',
        color: '#570EF1',
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
        type: 'Category',
        categories: Object.keys(skillCount),
        title: {
          text: 'Percentage on Your Applications',
          fontSize: '140px',
        },
      },
      yaxis: {
        forceNiceScale: false,
        max: 100,
        labels: {
          show: true,
        },
        title: {
          text: 'Skills',
        },
      },
    },
    markers: {
      size: 0,
    },
  }

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
