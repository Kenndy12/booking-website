import "./PropertyList.css"
import HotelImg from "../../assets/Hotels.webp";
import ApartmentImg from "../../assets/Apartments.jpg";
import CabinsImg from "../../assets/Cabins.jpg";
import ResortImg from "../../assets/Resorts.jpg";
import VillaImg from "../../assets/Villas.jpg";

const PropertyList = () => {
  return (
    <div className="pList">
        <div className="pListItem">
            <img src={HotelImg} alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>238 Hotels</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src={ApartmentImg} alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>123 Apartments</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src={ResortImg} alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>138 Resorts</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src={VillaImg} alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>102 Villas</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src={CabinsImg} alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>109 Cabins</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList