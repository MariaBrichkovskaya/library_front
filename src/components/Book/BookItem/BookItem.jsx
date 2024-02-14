import item from './BookItem.module.css'
const BookItem = (props) => {
    return (
        <div className={item.item}>{props.name} {props.author} {props.date}</div>
    )
}
export default BookItem