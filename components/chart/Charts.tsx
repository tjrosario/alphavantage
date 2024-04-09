import Chart from '@/components/chart/Chart';
import ChartControls from '@/components/chart/ChartControls';
import { fetchIncomeStatements } from '@/utils/api/incomeStatement';
import { fetchBalanceSheet } from '@/utils/api/balanceSheet';
import { ChartContext } from '@/components/chart/ChartProvider';
import { useContext } from 'react';
import { BalanceSheetReport, IncomeStatementReport } from '@/types/report';
import Loader from '@/components/loader/Loader';

export default function Charts() {
  const {
    balanceSheetData,
    incomeStatementData,
    loading,
    setBalanceSheetData,
    setIncomeStatementData,
    setLoading,
  } = useContext(ChartContext);

  async function fetchData(symbol: string) {
    if (!symbol) {
      return;
    }
    setLoading(true);

    const [incomeStatements, balanceSheet] = await Promise.all([
      fetchIncomeStatements(symbol),
      fetchBalanceSheet(symbol),
    ]);

    setIncomeStatementData(incomeStatements);
    setBalanceSheetData(balanceSheet);
    setLoading(false);
  }

  // Build out data set for the chart
  const data = incomeStatementData?.quarterlyReports
    ? {
        labels: incomeStatementData?.quarterlyReports?.map(
          (report: IncomeStatementReport) => report.fiscalDateEnding
        ),
        datasets: [
          {
            label: 'Net Income',
            data: incomeStatementData?.quarterlyReports?.map(
              (report: IncomeStatementReport) => report.netIncome
            ),
            fill: false,
            borderColor: '#43911a',
            tension: 0.1,
          },
          {
            label: 'Total Revenue',
            data: incomeStatementData?.quarterlyReports?.map(
              (report: IncomeStatementReport) => report.totalRevenue
            ),
            fill: false,
            borderColor: '#d5ae26',
            tension: 0.1,
          },
          {
            label: 'Total Shareholder Equity',
            data: balanceSheetData?.quarterlyReports?.map(
              (report: BalanceSheetReport) => report.totalShareholderEquity
            ),
            fill: false,
            borderColor: '#5a76f7',
            tension: 0.1,
          },
        ],
      }
    : null;

  return (
    <div>
      <ChartControls onSymbolChange={(value) => fetchData(value)} />

      <div className="mt-5">{loading ? <Loader /> : <Chart data={data} />}</div>
    </div>
  );
}
