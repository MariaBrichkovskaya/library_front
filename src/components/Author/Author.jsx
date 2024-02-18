import author from './Author.module'
import AuthorItem from './AuthorItem/AuthorItem';
const Author = (props) => {

    let authorsElements = props.state.authors.map(el => <AuthorItem name={el.name} surname={el.surname} />)

    return (
        <div className={author.author}>
            {authorsElements}
        </div>
    );

}
export default Author
