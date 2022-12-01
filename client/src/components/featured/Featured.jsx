import "./Featured.css"
import Dublin from "../../assets/Dublin.webp";
import Austin from "../../assets/Austin.webp";
import Reno from "../../assets/Reno.webp";
import useFetch from "../../hooks/useFetch";

const Featured = () => {

    const  {data, loading, error} = useFetch("/hotels/countByCity?cities=berlin,madrid,london")

  return (
    <div className="featured">
        {loading ? ("Loading please wait") : (
        <><div className="featuredItem">
            <img src={Dublin} alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Berlin</h1>
                <h2>{data[0]} properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src={Austin} alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Madrid</h1>
                <h2>{data[1]} properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src={Reno} alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>London</h1>
                <h2>{data[2]} properties</h2>
            </div>
        </div></>
        )}

    </div>
  )
}

export default Featured