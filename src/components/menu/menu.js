import MenuItem from './menu-item';

/**
 * Компонент отвечает за главное меню на сайте
 * @returns 
 */
function Menu() {
  const menuItems = [
    { title: 'Видео', url: '#' },
    { title: 'Картинки', url: '#' },
    { title: 'Новости', url: '#' },
    { title: 'Карты', url: '#' },
    { title: 'Маркет', url: '#' },
    { title: 'Переводчик', url: '#' },
    { title: 'Эфир', url: '#' },
    { title: 'ещё', url: '#' }
  ]
  return (
    <menu>
      <ul>
        {menuItems.map(item => <MenuItem key={item.title} {...item} />)}
      </ul>
    </menu>
  );
}

export default Menu;