import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegKeyboard } from "react-icons/fa6";
import { IoLanguage } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";

import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from "../../Popper"
import MenuItem from './MenuItem';
import { render } from '@testing-library/react';

function Menu({ children, data }) {

    return (
        <Tippy
            delay={[0, 700]}
            target
            interactive={true}
            render={attrs => (
                <PopperWrapper>
                    <div className="content">
                        <MenuItem data={data} />
                    </div>
                </PopperWrapper>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;