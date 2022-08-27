import ListSection from '../list-section';
import TVProgramItem from './tv-program-item';

/**
 * Компонент отвечает за отображение телепрограммы
 * @returns 
 */
function TVProgram() {
  const items = [
    { time: '02:00', title: 'ТНТ.Best', channel: 'ТНТ International' },
    { time: '02:15', title: 'Джинглики', channel: 'Карусель Int' },
    { time: '02:25', title: 'Наедине со всеми', channel: 'Первый' }
  ]
  return (
    <ListSection title='Телепрограмма'>
      <span>Эфир</span>
      {items.map(item => <TVProgramItem key={item.title} {...item} />)}
    </ListSection>
  )
}

export default TVProgram;