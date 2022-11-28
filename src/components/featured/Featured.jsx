import "./Featured.css"
import Dublin from "../../assets/Dublin.webp";
import Austin from "../../assets/Austin.webp";
import Reno from "../../assets/Reno.webp";

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src={Dublin} alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src={Austin} alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Austin</h1>
                <h2>546 properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src={Reno} alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Reno</h1>
                <h2>329 properties</h2>
            </div>
        </div>

    </div>
  )
}

export default Featured