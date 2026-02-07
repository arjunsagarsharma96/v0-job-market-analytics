"use client"

import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import type { JobListing } from "@/lib/job-data"

interface IndustryDemandChartProps {
  data: JobListing[]
}

function getIndustryDemand(data: JobListing[]) {
  const industryCounts: Record<string, number> = {}
  for (const job of data) {
    industryCounts[job.industry] = (industryCounts[job.industry] || 0) + 1
  }
  return Object.entries(industryCounts)
    .map(([industry, count]) => ({ industry, count }))
    .sort((a, b) => b.count - a.count)
}

export function IndustryDemandChart({ data }: IndustryDemandChartProps) {
  const industryData = getIndustryDemand(data)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Industry Hiring Demand</CardTitle>
        <CardDescription>Number of open positions by industry sector</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            count: {
              label: "Job Count",
              color: "hsl(340, 65%, 55%)",
            },
          }}
          className="h-[300px]"
        >
          <BarChart data={industryData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis
              dataKey="industry"
              tick={{ fontSize: 12 }}
              className="fill-muted-foreground"
            />
            <YAxis
              tick={{ fontSize: 12 }}
              className="fill-muted-foreground"
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar
              dataKey="count"
              fill="var(--color-count)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
