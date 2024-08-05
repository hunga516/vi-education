import { Link } from "react-router-dom";

function Button({ children, to, href, onClick, size, type, ...passProps }) {
    let Comp = 'button'
    let className = ''
    let style = {}

    switch (size) {
        case "small":
            className = "px-[16px] h-[36px]"
            break;
        case "medium":
            className = "w-[100px] h-[36px]"
            style = { color: "white" }
            break;
        default:
            break;
    }

    switch (type) {
        case "primary":
            className = className + " flex items-center justify-center hover:bg-[#ef2a51] rounded-[4px] bg-[#fe2c55]"
            break;
        case "outline":
            className = className + ""
            break;
        default:
            break;
    }

    let props = {
        onClick,
        className,
        style,
        ...passProps
    }


    if (to) {
        Comp = Link
        props.to = to
    } else if (href) {
        Comp = 'a'
        props.href = href
    }

    return (
        <Comp {...props} >
            <span>{children}</span>
        </Comp>
    );
}

export default Button;