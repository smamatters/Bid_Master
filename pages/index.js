import Head from 'next/head';
import PlumbingBidEstimator from '../PlumbingBidEstimator';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Plumbing Bid Estimator</title>
      </Head>
      <main>
        <PlumbingBidEstimator />
      </main>
    </div>
  );
}
