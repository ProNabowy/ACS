import { useEffect, useState } from 'react'
import logo from '/images/logo.png';
import { NavLink, } from 'react-router-dom';
import { Sidebar } from './components';
import bars from '/images/bars.svg';

export default function Header() {

    const [classNames, setClassNames] = useState('bg-[#1e3d8140] text-white');

    const [visible, setVisible] = useState(false);

    const routes = [
        { name: "Home", url: "/" },
        { name: "Our Services", url: "/services" },
        { name: "Information", url: "/information" },
        { name: "About Us", url: "about" },
        { name: "Contact Us", url: "contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {

            if (window.scrollY > 150) setClassNames('bg-white shadow-lg');
            else setClassNames('bg-[#1e3d8140] text-white');
        }

        window.addEventListener('scroll', handleScroll);

        return _ => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${classNames} transition-all fixed w-full top-0 z-[100] py-2`}>

            <div className="container flex-between">

                <img src={logo} className='w-fit ' alt="" />

                <img src={bars} onClick={e => {
                    e.stopPropagation();
                    setVisible(true);
                }} className='w-[30px] md:hidden' alt="" />

                <ul className='hidden md:flex items-center gap-8'>

                    {
                        routes?.map((item, index) => {

                            return <li key={index}> <NavLink to={item.url} className={'text-md-text font-medium'}>{item.name}</NavLink></li>

                        })
                    }
                </ul>

            </div>

            <Sidebar
                visible={visible}
                setVisible={setVisible}
                routes={routes}
            />

        </header>
    )
}
