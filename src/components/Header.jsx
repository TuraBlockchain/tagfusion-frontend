import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
    return (
        <div className="fixed top-0 left-0 right-0 w-full flex justify-between items-center px-64 py-4 z-50">
            <div className="flex items-center gap-4">
                <Link to="/" className="w-fit flex items-center gap-1">
                    <img src="/icons/logo.png" alt="logo" className="w-16 object-contain rounded" />
                </Link>
                {/*<Link to="/" className="text-white font-semibold capitalize hover:underline">home</Link>*/}
                {/*<Link to="/#about" className="text-white font-semibold capitalize hover:underline">about</Link>*/}
                {/*<Link to="/#tagfusion" className="text-white font-semibold capitalize hover:underline">tagfusion</Link>*/}
                {/*<Link to="/#tokenomics" className="text-white font-semibold capitalize hover:underline">tokenomics</Link>*/}
                {/*<Link to="/#roadmap" className="text-white font-semibold capitalize hover:underline">roadmap</Link>*/}
            </div>
            <div className="flex items-center gap-6">
                <Link to="/card" className="z-50">
                    <Button text="my tags" link="/card" className="text-green-500  hover:bg-gradient-red-orange hover:shadow-custom-shadow hover:border-0" />
                </Link>
            </div>
        </div>
    );
};

export default Header;
