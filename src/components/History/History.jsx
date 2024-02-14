import history from './History.module.css'
import HistoryItem from './HistoryItem/HistoryItem'
const History = () => {
    return (
        <div>
            <HistoryItem name="book1" author="author1" date="today" />
            <HistoryItem name="book2" author="author2" date="21.01" />
            <HistoryItem name="book3" author="author3" date="2.02" /></div>
    )
}
export default History