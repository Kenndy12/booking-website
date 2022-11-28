import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer"> 
            <span className="spanLogo"> Booking Project </span>
            <div className="navItems">
                <button className="navButton"> Register </button>
                <button className="navButton"> Login </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar