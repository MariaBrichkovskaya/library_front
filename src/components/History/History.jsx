import history from './History.module.css'
import HistoryItem from './HistoryItem/HistoryItem'
const History = (props) => {

    let booksElements = props.state.history.map(el => <HistoryItem name={el.name} author={el.author} />)
    return (
        <div>
            {booksElements}
        </div>
    )
}
export default History