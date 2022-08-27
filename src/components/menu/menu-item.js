/**
 * Компонент отвечает за пункт меню
 * @param {*} props 
 * @returns 
 */
function MenuItem(props) {
  return (
    <li>
      <a href={props.url}>{props.title}</a>
    </li>
  );
}

export default MenuItem;