import InsightsSection from '@/components/insights/InsightsSection';
import ArticlesSection from '@/components/insights/ArticlesSection';
import { insightsMock } from '@/mocks/insights.mocks';

export default function InsightsPage() {
  return (
    <main>
      <InsightsSection />
      <ArticlesSection items={insightsMock} />
    </main>
  );
}
