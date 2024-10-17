import classNames from "classnames";
import Button from "../../../Button";

const DefaultFn = {}

function MenuItem({ data, onClick = DefaultFn }) {

    const classes = classNames({
        'border-t-[1px] border-[#e3e3e4]': data.separate,
    })

    return (
        <Button onClick={onClick} className={classes} size="large" type="menu">
            {typeof data.icon === 'function' ? (
                <data.icon className="text-[20px] mr-2" />
            ) : (
                <img src={data.icon} className="w-5 h-5 rounded-full" />
            )}
            <div className="">{data.title}</div>
        </Button>
    );
}

export default MenuItem;
