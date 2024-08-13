import { Link } from "react-router-dom";
import Images from "../Images";

function AccountItem({ data }) {
    console.log(data);

    return (
        <Link to={`/${data.nickname}`} className="account-item py-[9px] px-[16px] flex">
            <Images className="avatar mr-[12px] w-[36px] h-[40px] rounded-[150px]" src={data.avatar} alt="kk"></Images>
            <div className="account-body flex-1">
                <h4 className="text-[16px] font-medium leading-[16px]">{data.full_name}</h4>
                <span className="text-[14px] leading-[13px] font-medium text-gray-500/50 font-sans">{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;