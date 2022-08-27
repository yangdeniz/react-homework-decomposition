/**
 * Компонент отвечает за отображение раздела
 * @param {*} props 
 * @returns 
 */
function Section(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}

export default Section;