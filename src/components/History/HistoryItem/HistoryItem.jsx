import item from './HistoryItem.module.css'
const HistoryItem = (props) => {
    return (
        <div className={item.item}>{props.name} {props.author} {props.date}</div>
    )
}
export default HistoryItem