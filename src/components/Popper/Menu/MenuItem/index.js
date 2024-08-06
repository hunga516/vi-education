import Button from "../../../Button";

function MenuItem({ data }) {
    return (
        <ul>
            {data.map((item, index) => (
                <Button size="medium" type="menu">
                    <item.icon className="text-[20px] mr-2" />
                    <div className="">{item.content}</div>
                </Button>
            ))
            }
        </ul >
    );
}

export default MenuItem;