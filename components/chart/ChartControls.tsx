import Field from '@/components/form/Field';
import { useContext } from 'react';
import { ChartContext } from '@/components/chart/ChartProvider';

interface ChartControlProps {
  onSymbolChange: (value: string) => void;
}

export default function ChartControls({ onSymbolChange }: ChartControlProps) {
  const { stocks } = useContext(ChartContext);

  return (
    <div>
      <Field label="Stock:">
        <select
          className="w-auto border border-solid border-gray-400 rounded-md p-1 max-w-xs md:max-w-none"
          onChange={(e) => onSymbolChange(e.target.value)}
        >
          <option value={''}>Select Stock...</option>
          {stocks.map((symbol) => (
            <option key={symbol?.ticker} value={symbol?.ticker}>
              {symbol?.name} ({symbol?.ticker})
            </option>
          ))}
        </select>
      </Field>
    </div>
  );
}
