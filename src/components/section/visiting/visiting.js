import ListSection from '../list-section';
import VisitingItem from './visiting-item';

/**
 * Компонент отвечает за отображение раздела "Посещаемое"
 * @returns 
 */
function Visiting() {
  const items = [
    { title: 'Недвижимость', description: 'о сталинках', url: '#' },
    { title: 'Маркет', description: 'люстры и светильники', url: '#' },
    { title: 'Авто.ру', description: 'привод 4х4 до 500 000', url: '#' }
  ]
  return (
    <ListSection>
      {items.map(item => <VisitingItem key={item.title} {...item} />)}
    </ListSection>
  );
}

export default Visiting;