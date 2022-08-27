import Section from './section';
import SectionTitle from './section-title';

/**
 * Компонент отвечает за отображение раздела с изображением
 * @param {*} props 
 * @returns 
 */
function SectionWithImage(props) {
  return (
    <Section>
      <img src={props.img} alt='' />
      <SectionTitle {...props} />
      {props.children}
    </Section>
  );
}

export default SectionWithImage;