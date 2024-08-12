import { useEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


import { Wrapper as PopperWrapper } from "../../../../components/Popper";
import TippyHeadless from '@tippyjs/react/headless';
import styles from '../Header.module.css'
import 'tippy.js/dist/tippy.css'; // optional


function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)

    const inputRef = useRef()

    useEffect(() => {
        setTimeout(() => {
            if (searchResult.length === 0) {
                setSearchResult(["Ngoc Loc", "Bao Tran"])
            }
        }, 1000);
    }, []);

    const handleOnChange = (e) => {
        setSearchValue(e.target.value)
    }

    const handleDelete = (e) => {
        setSearchValue('')
        inputRef.current.focus()
    }

    return (
        <div
            className="search flex items-center w-[500px] h-[46px] border-[1px] border-transparent bg-[#1618230F] pl-[16px] py-[12px] rounded-[92px] focus-within:border-[#1618231F] hove">
            <TippyHeadless
                className="bg-white min-w-[200px] h-full"
                visible={showResult && searchValue.length > 0}
                placement="bottom"
                interactive={true}
                onClickOutside={() => setShowResult(false)}
                render={attrs => (
                    <PopperWrapper>
                        <div className="search-result" tabIndex="-1" {...attrs}>
                            <ul>
                                {searchResult.map(item => (
                                    <li>{item}</li>
                                ))}
                            </ul>

                            <h2 className="">Accounts</h2>
                            <div className="account-item py-[9px] px-[16px] flex">
                                <img className="avatar mr-[12px] w-[36px] h-[40px] rounded-[150px]" src="https://media.licdn.com/dms/image/D4E0BAQG-i2j7Q2WFIA/company-logo_200_200/0/1694593112031/img_logo?e=2147483647&v=beta&t=o1304VK0Zbh3CBA-8_LNYNZZCNrQjMIBS-nwKrAMzbY" alt=""></img>
                                <div className="account-body flex-1">
                                    <h4 className="text-[16px] font-medium leading-[16px]">Ngoc Loc</h4>
                                    <span className="text-[14px] leading-[13px] font-medium text-gray-500/50 font-sans">ngloc156</span>
                                </div>
                            </div>
                            <div className="account-item py-[9px] px-[16px] flex">
                                <img className="avatar mr-[12px] w-[36px] h-[40px] rounded-[150px]" src="https://media.licdn.com/dms/image/D4E0BAQG-i2j7Q2WFIA/company-logo_200_200/0/1694593112031/img_logo?e=2147483647&v=beta&t=o1304VK0Zbh3CBA-8_LNYNZZCNrQjMIBS-nwKrAMzbY" alt=""></img>
                                <div className="account-body flex-1">
                                    <h4 className="text-[16px] font-medium leading-[16px]">Ngoc Loc</h4>
                                    <span className="text-[14px] leading-[13px] font-medium text-gray-500/50 font-sans">ngloc156</span>
                                </div>
                            </div>
                            <div className="account-item py-[9px] px-[16px] flex">
                                <img className="avatar mr-[12px] w-[36px] h-[40px] rounded-[150px]" src="https://media.licdn.com/dms/image/D4E0BAQG-i2j7Q2WFIA/company-logo_200_200/0/1694593112031/img_logo?e=2147483647&v=beta&t=o1304VK0Zbh3CBA-8_LNYNZZCNrQjMIBS-nwKrAMzbY" alt=""></img>
                                <div className="account-body flex-1">
                                    <h4 className="text-[16px] font-medium leading-[16px]">Ngoc Loc</h4>
                                    <span className="text-[14px] leading-[13px] font-medium text-gray-500/50 font-sans">ngloc156</span>
                                </div>
                            </div>
                            <div className="account-item py-[9px] px-[16px] flex">
                                <img className="avatar mr-[12px] w-[36px] h-[40px] rounded-[150px]" src="https://media.licdn.com/dms/image/D4E0BAQG-i2j7Q2WFIA/company-logo_200_200/0/1694593112031/img_logo?e=2147483647&v=beta&t=o1304VK0Zbh3CBA-8_LNYNZZCNrQjMIBS-nwKrAMzbY" alt=""></img>
                                <div className="account-body flex-1">
                                    <h4 className="text-[16px] font-medium leading-[16px]">Ngoc Loc</h4>
                                    <span className="text-[14px] leading-[13px] font-medium text-gray-500/50 font-sans">ngloc156</span>
                                </div>
                            </div>
                            <div className="account-item py-[9px] px-[16px] flex">
                                <img className="avatar mr-[12px] w-[36px] h-[40px] rounded-[150px]" src="https://media.licdn.com/dms/image/D4E0BAQG-i2j7Q2WFIA/company-logo_200_200/0/1694593112031/img_logo?e=2147483647&v=beta&t=o1304VK0Zbh3CBA-8_LNYNZZCNrQjMIBS-nwKrAMzbY" alt=""></img>
                                <div className="account-body flex-1">
                                    <h4 className="text-[16px] font-medium leading-[16px]">Ngoc Loc</h4>
                                    <span className="text-[14px] leading-[13px] font-medium text-gray-500/50 font-sans">ngloc156</span>
                                </div>
                            </div>
                        </div>
                    </PopperWrapper>
                )}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Tìm kiếm"
                    className={`${styles.input} bg-transparent w-full h-[21px] outline-none caret-red-500  text-[#8a8b90] font-light text-[16px] tracking-wide`}
                    onChange={handleOnChange}
                    onFocus={() => setShowResult(true)}
                />
            </TippyHeadless>
            {
                searchValue && (
                    <button onClick={handleDelete} className="deleteIcon w-[40px] text-[#777778]">
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )
            }
            {/* <FontAwesomeIcon icon={faCircle} /> */}
            <span className="w-[1px] h-[28px] bg-[#1618231F]"></span>
            <button
                className={`${styles.searchIcon} pl-[12px] pr-[16px] py-[11px] rounded-r-[92px] text-[#A6A7AB] hover:bg-gray-200`}>
                <div style={{ width: '24px', height: '24px' }} >
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ width: '22px', height: '22px', strokeWidth: "0px" }} />
                </div>
            </button>
        </div >
    )
}

export default Search