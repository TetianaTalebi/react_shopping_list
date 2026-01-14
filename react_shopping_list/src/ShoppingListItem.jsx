function ShoppingListItem({obj}){
    const styles = {
        textDecorationLine: obj.completed ? 'line-through' : 'none',
        color: obj.completed ? 'gray' : 'snow',
        fontSize: '40px'
    }

    return (
        <li style={styles}>{obj.product} - {obj.quantity}</li>
    );
}

export default ShoppingListItem