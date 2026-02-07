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

interface SalaryDistributionChartProps {
  data: JobListing[]
}

function buildHistogram(data: JobListing[], bins: number = 10) {
  if (data.length === 0) return []
  const salaries = data.map((d) => d.avg_salary)
  const min = Math.min(...salaries)
  const max = Math.max(...salaries)
  const binWidth = (max - min) / bins || 1

  const histogram = Array.from({ length: bins }, (_, i) => ({
    range: `${((min + i * binWidth) / 100000).toFixed(1)}L`,
    count: 0,
    rangeStart: min + i * binWidth,
    rangeEnd: min + (i + 1) * binWidth,
  }))

  for (const salary of salaries) {
    const index = Math.min(Math.floor((salary - min) / binWidth), bins - 1)
    histogram[index].count++
  }

  return histogram
}

export function SalaryDistributionChart({ data }: SalaryDistributionChartProps) {
  const histogramData = buildHistogram(data)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Salary Distribution</CardTitle>
        <CardDescription>Distribution of average salaries across listings</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            count: {
              label: "Job Count",
              color: "hsl(217, 91%, 50%)",
            },
          }}
          className="h-[300px]"
        >
          <BarChart data={histogramData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis
              dataKey="range"
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
