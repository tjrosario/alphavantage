import Field from "@/components/form/Field";
import { useContext } from "react";
import { ChartContext } from "@/components/chart/ChartProvider";

interface ChartControlProps {
  onSymbolChange: (value: string) => void;
}

export default function ChartControls({ onSymbolChange }: ChartControlProps) {
  const { loading, stocks } = useContext(ChartContext);

  return (
    <div>
      <Field label="Stock:" loading={loading}>
        <select
          className="w-auto border border-solid border-gray-400 rounded-md p-1"
          onChange={(e) => onSymbolChange(e.target.value)}
        >
          <option value={""}>Select Stock...</option>
          {stocks.map((symbol) => (
            <option key={symbol.ticker} value={symbol.ticker}>
              {symbol.name} ({symbol.ticker})
            </option>
          ))}
        </select>
      </Field>
    </div>
  );
}
