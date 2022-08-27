/**
 * Компонент отвечает за отображение биржевой котировки
 * @param {*} props 
 * @returns 
 */
function RateItem(props) {
  return (
    <div>
      <span>{props.code}</span>
      <span>{props.rate}</span>
      <span>{props.change}</span>
    </div>
  );
}

export default RateItem;