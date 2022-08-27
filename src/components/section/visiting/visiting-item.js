/**
 * Компонент отвечает за отображение пункта раздела "Посещаемое"
 * @param {*} props 
 * @returns 
 */
function VisitingItem(props) {
  return (
    <li>
      <a href={props.url}><b>{props.title}</b> - {props.description}</a>
    </li>
  );
}

export default VisitingItem;