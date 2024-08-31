import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="flex flex-row justify-between p-4 m-2 bg-[#624a35] rounded-lg text-[#F5DEB3]">
            <div className="flex items-center">
                <h1 className="text-3xl font-bold font-serif text-[#F5DEB3]">Prayas IITH </h1>
            </div>
            <div className="flex flex-row gap-4 items-center">
                <NavLink id="headerRef" to="/">About</NavLink>
                <NavLink id="headerRef" to="/announcements">Announcements</NavLink>
                <NavLink id="headerRef" to="/competitions">Competitions</NavLink>
                <NavLink id="headerRef" to="/gallery">Gallery</NavLink>
                <NavLink id="headerRef" to="/team">Team</NavLink>
                <NavLink id="headerRef" to="/donate">Donate</NavLink>
                <NavLink id="headerRef" to="/contact">Contact</NavLink>
            </div>
        </div>
    );
}

export default Navbar;
