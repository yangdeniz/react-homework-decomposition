import Section from './section';
import SectionTitle from './section-title';

/**
 * Компонент отвечает за отображение раздела со списком
 * @param {*} props 
 * @returns 
 */
function ListSection(props) {
  return (
    <Section>
      <SectionTitle {...props} />
      <ul>
        {props.children}
      </ul>
    </Section>
  );
}

export default ListSection;