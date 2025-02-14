import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="w-64 bg-gray-100 p-4">
            <nav>
                <ul>
                    <li className="mb-2">
                        <Link to="/basics/registry" className="text-blue-600 hover:underline">
                            What is a Registry?
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/basics/container" className="text-blue-600 hover:underline">
                            What is a Container?
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/basics/compose" className="text-blue-600 hover:underline">
                            What is Docker Compose?
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/basics/image" className="text-blue-600 hover:underline">
                            What is an Image?
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
