import React, { useState, createContext, ReactNode } from 'react';
import SYMBOLS from '@/data/stockSymbols';
import { Stock } from '@/types/stock';
import { BalanceSheet } from '@/types/balanceSheet';
import { IncomeStatement } from '@/types/statement';

interface ChartContextProps {
  balanceSheetData: BalanceSheet;
  incomeStatementData: IncomeStatement;
  loading: boolean;
  setBalanceSheetData: React.Dispatch<React.SetStateAction<any[]>>;
  setIncomeStatementData: React.Dispatch<React.SetStateAction<any[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  stocks: Stock[];
}

interface ChartProviderProps {
  children: ReactNode;
}

const ChartContext = createContext<ChartContextProps>({
  balanceSheetData: {},
  incomeStatementData: {},
  loading: false,
  setBalanceSheetData: () => {},
  setIncomeStatementData: () => {},
  setLoading: () => {},
  stocks: [],
});

function ChartProvider({ children }: ChartProviderProps) {
  const [loading, setLoading] = useState(false);
  const [balanceSheetData, setBalanceSheetData] = useState({});
  const [incomeStatementData, setIncomeStatementData] = useState({});

  const value = {
    balanceSheetData,
    incomeStatementData,
    loading,
    setBalanceSheetData,
    setIncomeStatementData,
    setLoading,
    stocks: SYMBOLS.filter((s) => s.ticker === 'IBM'),
  };

  return (
    <ChartContext.Provider value={value}>{children}</ChartContext.Provider>
  );
}

export { ChartContext, ChartProvider };
