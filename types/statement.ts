import { IncomeStatementReport } from '@/types/report';

export interface IncomeStatement {
  annualReports?: IncomeStatementReport[];
  quarterlyReports?: IncomeStatementReport[];
  Information?: string;
  error?: string;
}
