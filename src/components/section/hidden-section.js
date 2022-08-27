import Section from './section';
import SectionTitle from './section-title';

/**
 * Компонент отвечает за отображение скрытого раздела
 * @param {*} props 
 */
function HiddenSection(props) {
  return (
    <Section>
      <SectionTitle {...props} isHidden />
    </Section>
  )
}

export default HiddenSection;