import RateItem from './rate-item';

/**
 * Компонент отвечает за отображение панели биржевых котировок
 * @returns 
 */
function RatesPanel() {
  const rates = [
    { code: 'USD MOEX', rate: 63.52, change: 0.09 },
    { code: 'EUR MOEX', rate: 70.86, change: 0.14 },
    { code: 'НЕФТЬ', rate: 64.90, change: 1.63 }
  ]
  return (
    <div>
      {rates.map(rate => <RateItem key={rate.code} {...rate} />)}
    </div>
  );
}

export default RatesPanel;