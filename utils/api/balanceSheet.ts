import api from '@/utils/api/api';

export function fetchBalanceSheet(symbol: string) {
  try {
    return api.get(
      `${process.env.NEXT_PUBLIC_AV_BASE_URL}/query?function=BALANCE_SHEET&symbol=${symbol}&apikey=${process.env.NEXT_PUBLIC_AV_API_KEY}`
    );
  } catch (err) {
    console.log({ err });
  }
}
