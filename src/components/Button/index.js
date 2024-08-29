import { Link } from "react-router-dom";
import classNames from 'classnames';

function Button({ children, to, href, className, onClick, size = "medium", type, ...passProps }) {
    let Comp = 'button';

    const classes = classNames(className, {
        'min-w-[50px] h-[30px]': size === 'small',
        'min-w-[100px] h-[36px]': size === 'medium',
        'min-w-[200px] h-[42px]': size === 'large',
        'flex disabled:opacity-50 items-center justify-center text-[#fff] rounded-[4px] bg-primary hover:bg-[#ef2a51]': type === 'primary',
        'flex disabled:opacity-50 items-center justify-center border-[1px] border-[#1618231E] hover:bg-[#f8f8f8]': type === 'outline-dark',
        'flex disabled:opacity-50 items-center justify-center font-thin text-md p-2 text-red-500 border-[1px] border-red-500 rounded-md': type === 'outline-primary',
        'w-full flex items-center py-[10px] pl-[16px] pr-[8px] text-[16px] font-normal leading-[21px] hover:bg-[#f8f8f8]': type === "menu",
        'flex disabled:opacity-50 items-center justify-center hover:bg-[#f8f8f8]': type === "outline-none"
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
