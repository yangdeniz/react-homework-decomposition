import './App.css';
import Advertisement from './components/advertisement/advertisement';
import Live from './components/section/live/live';
import Menu from './components/menu/menu';
import NewsPanel from './components/news/news-panel';
import Search from './components/search/search';
import SectionWithImage from './components/section/section-with-image';
import RatesPanel from './components/rates/rates-panel';
import TVProgram from './components/section/tv-program/tv-program';
import Visiting from './components/section/visiting/visiting';
import Weather from './components/section/weather/weather';
import SimpleSection from './components/section/simple-section';

function App() {
  return (
    <div className='container'>
      <div className='header'>
        <div>
          <NewsPanel />
          <RatesPanel />
        </div>
        <aside>
          <SectionWithImage title='Работа над ошибками' img=''>
            <p>Смотрите на Яндексе и запоминайте</p>
          </SectionWithImage>
        </aside>
      </div>
      <div className='main'>
        <Menu />
        <div className='logo'>Яндекс</div>
        <Search onSearch={value => console.log(value)} />
        <Advertisement url='#' img='' />
      </div>
      <div className='footer'>
        <Weather />
        <Visiting />
        <SimpleSection title='Карта Германии'>
          <p>Расписания</p>
        </SimpleSection>
        <TVProgram />
        <Live />
      </div>
    </div>
  );
}

export default App;
