import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faCar, faPerson, faPlane, faTaxi, faTowerObservation } from "@fortawesome/free-solid-svg-icons"
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons"
import { DateRange } from 'react-date-range';
import { useContext, useState } from "react";
import { format } from "date-fns";

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

const Header = ({type}) => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [dates, setDates] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
            ...prev, 
            [name]: operation === "i" ? options[name] + 1 : options[name] -1,
            };
        });
    };

    const {dispatch} = useContext(SearchContext)

    const handleSearch = () => {
        dispatch({type:"NEW_SEARCH", payload:{destination, dates, options}})
        navigate("/hotels",{ state : {destination, dates, options}});
    }
  return (
    <div className="header">
        <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>

                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>

                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car Rentals</span>
                </div>

                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTowerObservation} />
                    <span>Attractions</span>
                </div>

                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Taxi</span>
                </div>
            </div>
            { type !== "list" &&
            <>
            <h1 className="headerTitle"> A lifetime of discounts? It's genius</h1>
            <p className="headerDesc"> Get rewarded for your travels - unlock instant savings of 10% or more
            with an account</p>
            {!user && <button className="headerBtn"> Sign in / Register </button>}
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                    <input
                        type="text"
                        placeholder="Where are you going?"
                        className="headerSearchInput"
                        onChange={e=>setDestination(e.target.value)}
                    />
                </div>

                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                    <span onClick= {() =>setOpenDate(!openDate)} className="headerSearchText">{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, "dd/MM/yyyy")} `}</span>
                    {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDates([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={dates}
                        className="date"
                        minDate={new Date()}
                    />}
                </div>

                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                    <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                    {openOptions && <div className="options">
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <div className="optionCounter">
                                <button disabled={options.adult<=1} onClick={()=>handleOption("adult","d")} className="optionCounterButton">-</button>
                                <span className="optionCounterNumber">{options.adult}</span>
                                <button onClick={()=>handleOption("adult","i")} className="optionCounterButton">+</button>
                            </div>           
                        </div>

                        <div className="optionItem">
                            <span className="optionText">Children</span>
                            <div className="optionCounter">
                                <button disabled={options.children<=0} onClick={()=>handleOption("children","d")} className="optionCounterButton">-</button>
                                <span className="optionCounterNumber">{options.children}</span>
                                <button onClick={()=>handleOption("children","i")} className="optionCounterButton">+</button>
                            </div>    
                        </div>

                        <div className="optionItem"> 
                            <span className="optionText">Room</span>
                            <div className="optionCounter">
                                <button disabled={options.room<=1} onClick={()=>handleOption("room","d")} className="optionCounterButton">-</button>
                                <span className="optionCounterNumber">{options.room}</span>
                                <button onClick={()=>handleOption("room","i")} className="optionCounterButton">+</button>
                            </div>    
                        </div>
                    </div>}
                </div>

                <div className="headerSearchItem">
                    <button className="headerBtn" onClick={handleSearch}>Search</button>
                </div>
            </div></>}
        </div>
    </div>
  )
}

export default Header