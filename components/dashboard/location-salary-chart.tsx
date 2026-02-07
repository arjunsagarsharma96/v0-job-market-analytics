"use client"

import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
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
import { formatSalary } from "@/lib/job-data"

interface LocationSalaryChartProps {
  data: JobListing[]
}

function getLocationSalary(data: JobListing[]) {
  const locationMap: Record<string, { total: number; count: number }> = {}
  for (const job of data) {
    if (!locationMap[job.location]) {
      locationMap[job.location] = { total: 0, count: 0 }
    }
    locationMap[job.location].total += job.avg_salary
    locationMap[job.location].count++
  }
  return Object.entries(locationMap)
    .map(([location, { total, count }]) => ({
      location,
      avgSalary: Math.round(total / count),
    }))
    .sort((a, b) => b.avgSalary - a.avgSalary)
}

export function LocationSalaryChart({ data }: LocationSalaryChartProps) {
  const locationData = getLocationSalary(data)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Average Salary by Location</CardTitle>
        <CardDescription>Comparison of average salaries across cities</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            avgSalary: {
              label: "Avg Salary",
              color: "hsl(217, 91%, 50%)",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={locationData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis
                dataKey="location"
                tick={{ fontSize: 12 }}
                className="fill-muted-foreground"
              />
              <YAxis
                tickFormatter={(v: number) => formatSalary(v)}
                tick={{ fontSize: 12 }}
                className="fill-muted-foreground"
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar
                dataKey="avgSalary"
                fill="var(--color-avgSalary)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
