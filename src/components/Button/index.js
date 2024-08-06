import { Link } from "react-router-dom";
import classNames from 'classnames';

function Button({ children, to, href, className, onClick, size = "medium", type, ...passProps }) {
    let Comp = 'button';

    const classes = classNames(className, {
        'min-w-[50px] h-[20px]': size === 'small',
        'min-w-[100px] h-[36px]': size === 'medium',
        'min-w-[200px] h-[48px]': size === 'large',
        'flex disabled:opacity-50 items-center justify-center text-[#fff] rounded-[4px] bg-primary hover:bg-[#ef2a51]': type === 'primary',
        'flex disabled:opacity-50 items-center justify-center border-[1px] border-[#1618231E] hover:bg-[#f8f8f8]': type === 'outline-dark',
        'flex disabled:opacity-50 items-center justify-center text-[18px] text-red-500 border-[1px] border-red-500 rounded-md': type === 'outline-primary',
        'w-full flex justify-start py-[10px] pl-[16px] pr-[8px] text-[16px] font-normal leading-[21px] border-none hover:bg-[#f8f8f8]': type === "menu"
    });

    let props = {
        onClick,
        className: classes,
        ...passProps
    };

    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }

    return (
        <Comp {...props}>
            {children}
        </Comp>
    );
}

export default Button;
