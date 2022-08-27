import Section from './section';
import SectionTitle from './section-title';

/**
 * Компонент отвечает за отображение простого раздела
 * @param {*} props 
 * @returns 
 */
function SimpleSection(props) {
  return (
    <Section>
      <SectionTitle {...props} />
      {props.children}
    </Section>
  );
}

export default SimpleSection;