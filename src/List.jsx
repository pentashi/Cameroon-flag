import PropTypes from 'prop-types'

function List(props) {
    
    const category = props.category;
    const itemList = props.items;
    const number = props.number;

    // fruits.sort((a, b) => a.name.localeCompare(b.name));
// fruits.sort((a,b)=>b.calories-a.calories)
 
    
    const listItems = itemList.map(item => <li key={item.id}>
        {item.name}: &nbsp;
        <b>{item.age}</b></li>);
    return (
        <>
         
            <div className="container">
            <h1 className="list-category"> {category}</h1>
            <ol className="list-items">{listItems}</ol>
                <p className="paging">{number}</p>                
                </div>

        </>

    )
}
List.propTypes = {
    
    category: PropTypes.string,
    item: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
    }))
}
List.defaultProps = {
    category: "category",
    items: [
        {
            name: "achapi pentashis",
            calories: 20,
id:1        }
    ],
    
}
export default List  