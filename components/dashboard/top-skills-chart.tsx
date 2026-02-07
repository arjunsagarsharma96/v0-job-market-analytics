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

interface TopSkillsChartProps {
  data: JobListing[]
}

function getTopSkills(data: JobListing[], top: number = 10) {
  const skillCounts: Record<string, number> = {}
  for (const job of data) {
    const skills = job.skills.split(",")
    for (const skill of skills) {
      const trimmed = skill.trim()
      if (trimmed) {
        skillCounts[trimmed] = (skillCounts[trimmed] || 0) + 1
      }
    }
  }
  return Object.entries(skillCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, top)
    .map(([skill, frequency]) => ({ skill, frequency }))
}

export function TopSkillsChart({ data }: TopSkillsChartProps) {
  const topSkills = getTopSkills(data)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top In-Demand Skills</CardTitle>
        <CardDescription>Most frequently mentioned skills across job listings</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            frequency: {
              label: "Frequency",
              color: "hsl(35, 92%, 55%)",
            },
          }}
          className="h-[300px]"
        >
          <BarChart
            data={topSkills}
            layout="vertical"
            margin={{ top: 5, right: 20, left: 80, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis
              type="number"
              tick={{ fontSize: 12 }}
              className="fill-muted-foreground"
            />
            <YAxis
              type="category"
              dataKey="skill"
              tick={{ fontSize: 12 }}
              className="fill-muted-foreground"
              width={75}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar
              dataKey="frequency"
              fill="var(--color-frequency)"
              radius={[0, 4, 4, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
