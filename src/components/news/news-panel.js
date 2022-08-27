import { useState } from 'react';
import NewsSection from './news-section';

/**
 * Компонент отвечает за отображение панели новостей
 * @returns 
 */
function NewsPanel() {
  const media = [
    { title: 'Lorem ipsum dolor sit amet', url: '#', img: '' },
    { title: 'Lorem ipsum dolor sit amet', url: '#', img: '' },
    { title: 'Lorem ipsum dolor sit amet', url: '#', img: '' },
    { title: 'Lorem ipsum dolor sit amet', url: '#', img: '' },
    { title: 'Lorem ipsum dolor sit amet', url: '#', img: '' },
  ];
  const local = [
    { title: 'Lorem ipsum dolor sit amet', url: '#', img: '' },
    { title: 'Lorem ipsum dolor sit amet', url: '#', img: '' },
    { title: 'Lorem ipsum dolor sit amet', url: '#', img: '' },
  ];
  const recommendations = [
    { title: 'Lorem ipsum dolor sit amet', url: '#', img: '' },
    { title: 'Lorem ipsum dolor sit amet', url: '#', img: '' },
    { title: 'Lorem ipsum dolor sit amet', url: '#', img: '' },
    { title: 'Lorem ipsum dolor sit amet', url: '#', img: '' },
  ];

  const [actual, setActual] = useState('media');

  return (
    <div>
      <NewsSection title='Сейчас в СМИ' news={media} isHidden={actual !== 'media'} onClick={() => setActual('media')} />
      <NewsSection title='в Германии' news={local} isHidden={actual !== 'local'} onClick={() => setActual('local')} />
      <NewsSection title='Рекомендуем' news={recommendations} isHidden={actual !== 'recommendations'} onClick={() => setActual('recommendations')} />
      <span>31 июля, среда 02:32</span>
    </div>
  );
}

export default NewsPanel;