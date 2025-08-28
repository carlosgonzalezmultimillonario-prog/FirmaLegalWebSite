
import ArticlesSection from '@/components/insights/ArticlesSection'
import InsightsSection from '@/components/insights/InsightsSection'
import { insightsMock } from '@/mocks/insights.mocks'
import React from 'react'

export default function InsightsPage() {
  return (
    <>
       <InsightsSection />
      <ArticlesSection items={insightsMock} /> 
    </>
  )
}
