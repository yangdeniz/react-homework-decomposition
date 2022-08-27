import ListSection from '../list-section';
import LiveItem from './live-item';

/**
 * Компонент отвечает за отображение раздела "Эфир"
 * @returns 
 */
function Live() {
  const items = [
    { title: 'Управление как искусство', channel: 'Успех' },
    { title: 'Ночь. Мир в это время', channel: 'earthTV' },
    { title: 'Андрей Возн...', channel: 'Совершенно секретно' }
  ]
  return (
    <ListSection>
      {items.map(item => <LiveItem key={item.title} {...item} />)}
    </ListSection>
  );
}

export default Live;