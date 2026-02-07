"use client"

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"
import type { JobListing } from "@/lib/job-data"
import { formatSalary } from "@/lib/job-data"

interface ExperienceSalaryChartProps {
  data: JobListing[]
}

function CustomTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: { experience_required: number; avg_salary: number; job_title: string } }> }) {
  if (active && payload && payload.length) {
    const d = payload[0].payload
    return (
      <div className="rounded-lg border bg-card p-3 text-sm shadow-md">
        <p className="font-medium text-card-foreground">{d.job_title}</p>
        <p className="text-muted-foreground">
          Experience: {d.experience_required} yrs
        </p>
        <p className="text-muted-foreground">
          Salary: {formatSalary(d.avg_salary)}
        </p>
      </div>
    )
  }
  return null
}

export function ExperienceSalaryChart({ data }: ExperienceSalaryChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Experience vs Salary</CardTitle>
        <CardDescription>Correlation between years of experience and average salary</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            salary: {
              label: "Salary",
              color: "hsl(170, 60%, 45%)",
            },
          }}
          className="h-[300px]"
        >
          <ScatterChart margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis
              type="number"
              dataKey="experience_required"
              name="Experience"
              unit=" yrs"
              tick={{ fontSize: 12 }}
              className="fill-muted-foreground"
            />
            <YAxis
              type="number"
              dataKey="avg_salary"
              name="Salary"
              tickFormatter={(v: number) => formatSalary(v)}
              tick={{ fontSize: 12 }}
              className="fill-muted-foreground"
            />
            <Tooltip content={<CustomTooltip />} />
            <Scatter
              name="Jobs"
              data={data}
              fill="hsl(170, 60%, 45%)"
              fillOpacity={0.7}
              r={5}
            />
          </ScatterChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
