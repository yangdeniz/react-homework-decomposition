/**
 * Компонент отвечает за отображение пункта из раздела "Эфир"
 * @param {*} props 
 * @returns 
 */
function LiveItem(props) {
  return (
    <li>
      <span>{props.title}</span>
      <span>{props.channel}</span>
    </li>
  )
}

export default LiveItem;