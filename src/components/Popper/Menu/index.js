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
import Header from './Header';

import { useState } from 'react';


function Menu({ children, items, onChange, payload }) {

    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]
    const [isChildren, setIsChildren] = useState(false)

    return (
        <Tippy
            trigger='click'
            delay={[0, 700]}
            target
            placement='bottom-end'
            interactive={true}
            render={attrs => (
                <PopperWrapper>
                    <div className="content">
                        {history.length > 1 && <Header title="Ngôn ngữ" onBack={() => {
                            setHistory(prev => prev.slice(0, history.length - 1))
                        }} />}
                        {current.data.map((item, index) => {
                            const isParent = !!item.children
                            return <MenuItem
                                key={index}
                                data={item}
                                onClick={() => {
                                    if (isParent) {
                                        setHistory((prev) => [...prev, item.children]);
                                    } else {
                                        item.onClick ? item.onClick(payload) : onChange(item);
                                    }
                                }}
                            />
                        })
                        }
                    </div>
                </PopperWrapper>
            )}
            onHide={() => setHistory(prev => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;