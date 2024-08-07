import Button from "../../../Button";

function MenuItem({ data, onClick }) {
    return (
        <div>
            <Button onClick={onClick} size="large" type="menu">
                {data.icon && <data.icon className="text-[20px] mr-2" />}
                <div className="">{data.title}</div>
            </Button>
        </div >
    );
}

export default MenuItem;