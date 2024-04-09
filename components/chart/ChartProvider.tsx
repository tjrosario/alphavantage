import React, { useState, createContext, ReactNode, useEffect } from 'react';
import SYMBOLS from '@/data/stockSymbols';
import { Stock } from '@/types/stock';
import { BalanceSheet } from '@/types/balanceSheet';
import { IncomeStatement } from '@/types/statement';
import { Alert } from '@/types/alert';

interface ChartContextProps {
  balanceSheetData: BalanceSheet;
  alert: Alert;
  incomeStatementData: IncomeStatement;
  loading: boolean;
  setAlert: React.Dispatch<React.SetStateAction<Alert>>;
  setBalanceSheetData: React.Dispatch<React.SetStateAction<BalanceSheet>>;
  setIncomeStatementData: React.Dispatch<React.SetStateAction<IncomeStatement>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  stocks: (Stock | undefined)[];
}

interface ChartProviderProps {
  children: ReactNode;
}

const ChartContext = createContext<ChartContextProps>({
  alert: {},
  balanceSheetData: {},
  incomeStatementData: {},
  loading: false,
  setAlert: () => {},
  setBalanceSheetData: () => {},
  setIncomeStatementData: () => {},
  setLoading: () => {},
  stocks: [],
});

function ChartProvider({ children }: ChartProviderProps) {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<Alert>({ content: '', type: 'info' });
  const [balanceSheetData, setBalanceSheetData] = useState<BalanceSheet>({});
  const [incomeStatementData, setIncomeStatementData] =
    useState<IncomeStatement>({});

  // For demo purposes IBM is the only symbol that bypasses api rate-limits
  const ibm = SYMBOLS.find((s) => s.ticker === 'IBM');

  const value = {
    alert,
    balanceSheetData,
    incomeStatementData,
    loading,
    setAlert,
    setBalanceSheetData,
    setIncomeStatementData,
    setLoading,
    stocks: [ibm, ...SYMBOLS.slice(0, 50)],
  };

  useEffect(() => {
    // Catch errors and information alerts
    let alertState = { content: '', type: 'info' };

    if (balanceSheetData.Information) {
      alertState = { content: balanceSheetData.Information, type: 'info' };
    } else if (balanceSheetData.error) {
      alertState = { content: balanceSheetData.error, type: 'danger' };
    } else if (incomeStatementData.Information) {
      alertState = { content: incomeStatementData.Information, type: 'info' };
    } else if (incomeStatementData.error) {
      alertState = { content: incomeStatementData.error, type: 'danger' };
    } else {
      alertState = { content: '', type: 'info' };
    }

    setAlert(alertState);
  }, [balanceSheetData, incomeStatementData]);

  return (
    <ChartContext.Provider value={value}>{children}</ChartContext.Provider>
  );
}

export { ChartContext, ChartProvider };
