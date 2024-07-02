import { useState, useEffect } from 'react';
import { ICost } from '../../../types/index';
import { CostsItem } from '../CostsItem/CostItem';

export const CostsList = ({ costs }: { costs: ICost[] }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Устанавливаем loading в false, если есть расходы
    if (costs.length > 0) {
      setLoading(false);
    }
  }, [costs]);

  return (
    <ul className='list-group'>
      {/* Проверяем, есть ли расходы и загружены ли они */}
      {loading ? (
        <p>Загрузка расходов...</p>
      ) : Array.isArray(costs) && costs.length > 0 ? (
        costs.map((cost, index) => (
          <CostsItem cost={cost} index={index + 1} key={cost.categoryId} />
        ))
      ) : (
        <p>Нет расходов</p>
      )}
    </ul>
  );
};
