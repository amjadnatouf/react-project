import { Row, Col } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { PropTypes } from "prop-types";

Chart.register(ArcElement);

const SkillsItem = ({ percentage }) => {
  const data = {
    datasets: [
      {
        data: [percentage.progress, 100 - percentage.progress],
        backgroundColor: [percentage.color, "transparent"],
        borderWidth: 0,
        borderRadius: 10,
      },
    ],
  };

  const option = {
    cutout: "80%",
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: true,
        color: "#fff",
      },
    },
    maintainAspectRatio: false,
  };
  return (
    <Row>
      {/* <Row xs={1} sm={3}> */}
      <Col>
        <div className="text-center text-light skillsItem">
          <span className="percent">{percentage.progress}%</span>
          <div>
            <Doughnut
              role="pie"
              data={data}
              options={option}
              width={100}
              height={100}
            />
          </div>
          <div className="mt-2">{percentage.label}</div>
        </div>
      </Col>
    </Row>
  );
};

// Define PropTypes
SkillsItem.propTypes = {
  percentage: PropTypes.shape({
    progress: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};
export default SkillsItem;
