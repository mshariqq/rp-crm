import { Link } from "react-router-dom";

export function SidebarLink(props) {
    return(
        <>
            <Link to={props.link} className='nav-link text-white d-flex'>
            <i className={props.icon}></i>
            <span className="p-1"></span>
            {props.name}</Link>
        </>
    );
}