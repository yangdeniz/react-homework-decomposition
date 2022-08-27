/**
 * Компонент отвечает за отображение пункта телепрограммы
 * @param {*} props 
 * @returns 
 */
function TVProgramItem(props) {
  return (
    <li>
      <span>{props.time}</span>
      <span>{props.title}</span>
      <span>{props.channel}</span>
    </li>
  );
}

export default TVProgramItem;