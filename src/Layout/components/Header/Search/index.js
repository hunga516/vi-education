import { useEffect, useRef, useState } from "react";
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import axios from "axios";
import * as request from "../../../../utils/request";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { HiMiniXCircle } from "react-icons/hi2";


import { Wrapper as PopperWrapper } from "../../../../components/Popper";
import styles from '../Header.module.css'
import AccountItem from "../../../../components/AccounItem";
import { useDebounced } from "../../../../hooks";



function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)

    const Debounced = useDebounced(searchValue, 800)

    const inputRef = useRef()

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([])
            return;
        }

        setLoading(true)

        request.get('/users/search', {
            params: {
                q: searchValue,
                type: 'less'
            }
        })
            .then(res => {
                setSearchResult(res.data)
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            })

    }, [Debounced]);

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
                            {/* <ul>
                                {searchResult.map(item => (
                                    <li>{item}</li>
                                ))}
                            </ul> */}

                            <h2 className="text-[14px] text-[#51525b] font-semibold px-3 pt-1">Accounts</h2>

                            {searchResult.map(item => (
                                <AccountItem data={item} key={item.id} />
                            ))}
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
            <button onClick={handleDelete} className="flex items-center justify-center w-[40px] text-[#777778]">
                {
                    searchValue && !loading && (
                        <HiMiniXCircle className="delete-icon text-[20px]" />
                    )
                }
                {loading && (
                    <AiOutlineLoading3Quarters className="loading-icon text-[16px] animate-spin " />
                )}
            </button>
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