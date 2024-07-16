
import { GoInfo } from "react-icons/go";

const SensorStatusComponent = () => {
  return (
    <section className="sensor-status">
        <h6><span>Sensor Status</span> <GoInfo /></h6>
        <div className="sensor">
            <p>Sensor A <span className="status">Active</span> </p>
        </div>
        <div className="sensor">
            <p>Sensor B <span className="status">Inactive</span> </p>
        </div>
        <div className="sensor">
            <p>Sensor C<span className="status">Active</span> </p>
        </div>
    </section>
  )
}

export default SensorStatusComponent