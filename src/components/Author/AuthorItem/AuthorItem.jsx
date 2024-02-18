import item from './AuthorItem.module.css'
const AuthorItem = (props) => {
    return (
        <div className={item.item}>{props.name} {props.surname}</div>
    )
}
export default AuthorItem