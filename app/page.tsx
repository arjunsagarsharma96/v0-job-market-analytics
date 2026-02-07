"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Menu, BarChart3 } from "lucide-react"
import { jobListings, getUniqueValues } from "@/lib/job-data"
import { FilterSidebar } from "@/components/dashboard/filter-sidebar"
import { KpiCards } from "@/components/dashboard/kpi-cards"
import { SalaryDistributionChart } from "@/components/dashboard/salary-distribution-chart"
import { ExperienceSalaryChart } from "@/components/dashboard/experience-salary-chart"
import { TopSkillsChart } from "@/components/dashboard/top-skills-chart"
import { LocationSalaryChart } from "@/components/dashboard/location-salary-chart"
import { IndustryDemandChart } from "@/components/dashboard/industry-demand-chart"
import { JobTable } from "@/components/dashboard/job-table"

export default function Page() {
  const allJobTitles = useMemo(() => getUniqueValues(jobListings, "job_title"), [])
  const allLocations = useMemo(() => getUniqueValues(jobListings, "location"), [])

  const [selectedJobTitles, setSelectedJobTitles] = useState<string[]>(allJobTitles)
  const [selectedLocations, setSelectedLocations] = useState<string[]>(allLocations)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const filteredData = useMemo(
    () =>
      jobListings.filter(
        (job) =>
          selectedJobTitles.includes(job.job_title) &&
          selectedLocations.includes(job.location)
      ),
    [selectedJobTitles, selectedLocations]
  )

  return (
    <div className="flex min-h-screen">
      <FilterSidebar
        jobTitles={allJobTitles}
        locations={allLocations}
        selectedJobTitles={selectedJobTitles}
        selectedLocations={selectedLocations}
        onJobTitlesChange={setSelectedJobTitles}
        onLocationsChange={setSelectedLocations}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-md">
          <div className="flex items-center gap-4 px-6 py-4">
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden bg-transparent"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-4 w-4" />
              <span className="sr-only">Open filters</span>
            </Button>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <BarChart3 className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-semibold leading-tight text-foreground text-balance">
                  Job Market Analytics & Salary Insights
                </h1>
                <p className="text-sm text-muted-foreground">
                  Interactive dashboard analyzing job trends, salary patterns, and skill demand
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="space-y-6 p-6">
          {/* KPI Cards */}
          <KpiCards data={filteredData} />

          {/* Row 1: Salary Distribution + Experience vs Salary */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <SalaryDistributionChart data={filteredData} />
            <ExperienceSalaryChart data={filteredData} />
          </div>

          {/* Row 2: Top Skills + Location Salary */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <TopSkillsChart data={filteredData} />
            <LocationSalaryChart data={filteredData} />
          </div>

          {/* Row 3: Industry Demand */}
          <IndustryDemandChart data={filteredData} />

          {/* Data Table */}
          <JobTable data={filteredData} />
        </div>
      </main>
    </div>
  )
}
