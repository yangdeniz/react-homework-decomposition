/**
 * Компонент отвечает за отображение новости
 * @param {*} props 
 * @returns 
 */
function NewsItem(props) {
  return (
    <li>
      <img src={props.icon} alt='' />
      <a href={props.url}>{props.title}</a>
    </li>
  );
}

export default NewsItem;