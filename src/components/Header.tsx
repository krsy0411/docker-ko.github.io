import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-[#086dd7] text-white py-4 pl-6 pr-4 flex items-center">
            <div className="flex h-full items-center lg:gap-8 gap-2">
                <Link to="/">
                    <img src="/public/docker-logo-white.svg" alt="Docker Logo" className="h-8 mr-4" />
                </Link>
                <nav className='mt-1 hidden md:block'>
                    <ul className='flex text-sm md:text-base lg:gap-4'>
                        <li className='border-b-4 border-transparent hover:border-white/20'>
                            <Link to="/get-started">Get started</Link>
                        </li>
                        <li className='border-b-4 border-transparent hover:border-white/20'>
                            <Link to="/guides">Guides</Link>
                        </li>
                        <li className='border-b-4 border-transparent hover:border-white/20'>
                            <Link to="/manuals">Manuals</Link>
                        </li>
                        <li className='border-b-4 border-transparent hover:border-white/20'>
                            <Link to="/reference">Reference</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
