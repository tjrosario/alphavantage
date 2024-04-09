"use client";

import Charts from "@/components/chart/Charts";
import { ChartProvider } from "@/components/chart/ChartProvider";

export default function Home() {
  return (
    <ChartProvider>
      <main className="p-5 md:p-10">
        <div className="md:flex items-baseline gap-5">
          <h1 className="text-4xl">Quarterly Financials</h1>
          <small>
            Powered by{" "}
            <a
              href="https://www.alphavantage.co/documentation/"
              className="text-blue-400 hover:underline"
            >
              Alpha Vantage API
            </a>
          </small>
        </div>

        <div className="mt-10">
          <Charts />
        </div>
      </main>
    </ChartProvider>
  );
}
