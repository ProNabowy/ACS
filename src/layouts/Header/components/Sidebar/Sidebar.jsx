import { useEffect } from "react"
import logo from '/images/logo.png';
import close from '/images/x.svg';
import { NavLink } from "react-router-dom";

/**
 * Sidebar component for mobile view
 * @param {Object} props - Component props
 * @param {boolean} props.visible - Visibility state of the sidebar
 * @param {function} props.setVisible - Function to set the visibility state of the sidebar
 * @param {Array} props.routes - Array of routes to be rendered in the sidebar
 * @returns {JSX.Element} - The rendered sidebar component
 */
export default function Sidebar({ visible = false, setVisible, routes = [] }) {
    /**
     * Handles closing the sidebar when clicked outside
     */
    const handleClose = () => setVisible(false);

    /**
     * Adds click event listener to handle closing the sidebar when clicked outside
     */
    useEffect(() => {
        const handleClick = (e) => {
            if (!e.target.closest('aside')) {
                handleClose();
            }
        };

        window.addEventListener('click', handleClick);

        return () => window.removeEventListener('click', handleClick);
    }, []);

    return (
        <aside className={`absolute top-0 h-[100vh] bg-[#8091AB] w-[300px] transition-all z-20 px-4 md:hidden ${visible ? "right-0" : "right-[-400px]"}`}>

            {/* Logo and close button */}
            <div className="flex-between mt-3">
                <img src={logo} className='w-[50px]' alt="" />
                <img onClick={handleClose} src={close} className='w-[20px]' alt="" />
            </div>

            {/* Routes list */}
            <ul className='text-md-text font-medium mt-10'>
                {routes.map(({ name, url }, index) => (
                    <li className="mb-5" key={index}>
                        <NavLink to={url} className="!justify-start !h-fit !w-fit" onClick={handleClose}>
                            {name}
                        </NavLink>
                    </li>
                ))}
            </ul>

        </aside>
    )
}
