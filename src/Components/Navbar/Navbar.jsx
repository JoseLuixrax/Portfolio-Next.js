import Link from 'next/link';
import { NavbarWrapper } from './Navbar.styled';

const ROUTER = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Contact',
        path: '/contact',
    },
];


const NavBar = () => {
    return (
        <NavbarWrapper>
            {ROUTER.map((route,index) => (
                <Link href={route.path} key={index}>
                {route.name}
                </Link>
            ))}
        </NavbarWrapper>
    );
};

export default NavBar;