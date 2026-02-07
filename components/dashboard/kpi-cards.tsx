"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, IndianRupee, MapPin } from "lucide-react"
import type { JobListing } from "@/lib/job-data"
import { formatSalaryFull } from "@/lib/job-data"

interface KpiCardsProps {
  data: JobListing[]
}

export function KpiCards({ data }: KpiCardsProps) {
  const totalJobs = data.length

  const avgSalary =
    data.length > 0
      ? Math.round(data.reduce((sum, job) => sum + job.avg_salary, 0) / data.length)
      : 0

  const locationCounts: Record<string, number> = {}
  for (const job of data) {
    locationCounts[job.location] = (locationCounts[job.location] || 0) + 1
  }
  const topLocation =
    Object.entries(locationCounts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "N/A"

  const cards = [
    {
      title: "Total Jobs",
      value: totalJobs.toLocaleString("en-IN"),
      icon: Briefcase,
      accent: "hsl(217, 91%, 50%)",
    },
    {
      title: "Avg Salary",
      value: formatSalaryFull(avgSalary),
      icon: IndianRupee,
      accent: "hsl(170, 60%, 45%)",
    },
    {
      title: "Top Location",
      value: topLocation,
      icon: MapPin,
      accent: "hsl(35, 92%, 55%)",
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {cards.map((card) => (
        <Card key={card.title} className="relative overflow-hidden">
          <CardContent className="flex items-center gap-4 p-6">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"
              style={{ backgroundColor: `${card.accent}15` }}
            >
              <card.icon className="h-6 w-6" style={{ color: card.accent }} />
            </div>
            <div className="min-w-0">
              <p className="text-sm text-muted-foreground">{card.title}</p>
              <p className="truncate text-2xl font-semibold tracking-tight text-card-foreground">
                {card.value}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
