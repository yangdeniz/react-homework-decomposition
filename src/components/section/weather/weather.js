import SimpleSection from '../simple-section';

/**
 * Компонент отвечает за отображение прогноза погоды
 * @returns 
 */
function Weather() {
  return (
    <SimpleSection title='Погода'>
      <div>
        <span className='weather-icon'></span>
        <span>+17</span>
        <span>Утром +17, днем +20</span>
      </div>
    </SimpleSection>
  )
}

export default Weather;