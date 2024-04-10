import Chart from '@/components/chart/Chart';
import ChartControls from '@/components/chart/ChartControls';
import { fetchIncomeStatements } from '@/utils/api/incomeStatement';
import { fetchBalanceSheet } from '@/utils/api/balanceSheet';
import { ChartContext } from '@/components/chart/ChartProvider';
import { useContext } from 'react';
import Loader from '@/components/loader/Loader';
import Alert from '@/components/alert/Alert';
import { BalanceSheetReport, IncomeStatementReport } from '@/types/report';

function sortByFiscalDate(data: any) {
  if (!data) {
    return [];
  }

  return [...data].sort(
    (a, b) =>
      new Date(a.fiscalDateEnding).valueOf() -
      new Date(b.fiscalDateEnding).valueOf()
  );
}

export default function Charts() {
  const {
    alert,
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

  // Sort by fiscal date
  const incomeStatementDataSorted: IncomeStatementReport[] = sortByFiscalDate(
    incomeStatementData?.quarterlyReports
  );

  const balanceSheetDataSorted: BalanceSheetReport[] = sortByFiscalDate(
    balanceSheetData?.quarterlyReports
  );

  // Build out data set for the chart
  const data =
    incomeStatementDataSorted?.length > 0
      ? {
          labels: incomeStatementDataSorted.map(
            (report: IncomeStatementReport) => report.fiscalDateEnding
          ),
          datasets: [
            {
              label: 'Net Income',
              data: incomeStatementDataSorted.map(
                (report: IncomeStatementReport) => report.netIncome
              ),
              fill: false,
              borderColor: '#43911a',
              tension: 0.1,
            },
            {
              label: 'Total Revenue',
              data: incomeStatementDataSorted.map(
                (report: IncomeStatementReport) => report.totalRevenue
              ),
              fill: false,
              borderColor: '#d5ae26',
              tension: 0.1,
            },
            {
              label: 'Total Shareholder Equity',
              data: balanceSheetDataSorted.map(
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

      {!!alert?.content && (
        <div className="mt-5">
          <Alert type={alert.type}>{alert.content}</Alert>
        </div>
      )}

      <div className="mt-5">{loading ? <Loader /> : <Chart data={data} />}</div>
    </div>
  );
}
