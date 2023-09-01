function ListGroup() {

    let items = ["Toyota", "Ferari", "mercedes", "BMW"];


    /*if (items.length == 0) {
        return (
            <>
                <h1>List</h1>
                <p>No items were found</p>
            </>

        );
    }*/

    const getMessage = () => {
        return items.length == 0 && <p>No items found</p>;
    }

    return (<>
        <h1>List</h1>
        {getMessage()}

        <ul className="list-group">
            {items.map((item =>
                <li
                 className="list-group-item"
                key={item}
                onClick={(event) => console.log(event)}
                >
                    {item}
                </li>
                ))}

        </ul>

    </>

    );

}
//ctrl+d
export default ListGroup;