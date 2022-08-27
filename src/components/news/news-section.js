import ListSection from '../section/list-section';
import HiddenSection from '../section/hidden-section';
import NewsItem from './news-item';

/**
 * Компонент отвечает за отображение раздела новостей
 * @param {*} props 
 * @returns 
 */
function NewsSection(props) {
  if (props.isHidden) {
    return (
      <HiddenSection {...props} />
    )
  }

  return (
    <ListSection {...props}>
      {props.news.map(item => <NewsItem key={props.news.indexOf(item)} {...item} />)}
    </ListSection>
  );
}

export default NewsSection;