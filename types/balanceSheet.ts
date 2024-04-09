import { BalanceSheetReport } from '@/types/report';

export interface BalanceSheet {
  annualReports?: BalanceSheetReport[];
  quarterlyReports?: BalanceSheetReport[];
  Information?: string | undefined;
  error?: string;
}
