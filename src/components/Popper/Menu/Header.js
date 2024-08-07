import { IoIosArrowBack } from "react-icons/io";
import Button from "../../Button";

function Header({ title, onBack }) {
    return (
        <header className="header-submenu">
            <Button onClick={onBack} className="relative w-full h-[50px]" type="outline-none">
                <IoIosArrowBack className="absolute text-[20px] left-[28px]" />
                <h4 className=" font-medium leading-5">
                    {title}
                </h4>
            </Button>
        </header>
    );
}

export default Header