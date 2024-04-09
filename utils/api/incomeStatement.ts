import api from "@/utils/api/api";

export function fetchIncomeStatements(symbol: string) {
  try {
    return api.get(
      `${process.env.NEXT_PUBLIC_AV_BASE_URL}/query?function=INCOME_STATEMENT&symbol=${symbol}&apikey=${process.env.NEXT_PUBLIC_AV_API_KEY}`
    );
  } catch (err) {
    console.log({ err });
  }
}
