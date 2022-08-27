/**
 * Компонент отвечает за отображение заголовка раздела
 * @param {*} props 
 * @returns 
 */
function SectionTitle(props) {
  return (
    <h5 className={props.isHidden ? 'transparent' : ''}>
      <a href={props.url} onClick={props.onClick}>{props.title}</a>
    </h5>
  );
}

export default SectionTitle;