'use client';

import Header from '@/components/header/Header';
import Charts from '@/components/chart/Charts';
import { ChartProvider } from '@/components/chart/ChartProvider';
import NextLink from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <ChartProvider>
        <main className="py-5 md:py-10">
          <div className="container mx-auto px-5 md:px-0">
            <div className="md:flex items-baseline gap-5">
              <h1 className="text-4xl">Quarterly Financials</h1>
              <small>
                Powered by{' '}
                <NextLink
                  href="https://www.alphavantage.co/documentation/"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                >
                  Alpha Vantage API
                </NextLink>
              </small>
            </div>

            <div className="mt-8">
              <Charts />
            </div>
          </div>
        </main>
      </ChartProvider>
    </>
  );
}
