"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { JobListing } from "@/lib/job-data"
import { formatSalaryFull } from "@/lib/job-data"

interface JobTableProps {
  data: JobListing[]
}

export function JobTable({ data }: JobTableProps) {
  const displayData = data.slice(0, 50)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filtered Job Listings</CardTitle>
        <CardDescription>
          Showing {displayData.length} of {data.length} listings
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Title</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Company</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Location</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Industry</th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">Salary</th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">Exp (yrs)</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Skills</th>
              </tr>
            </thead>
            <tbody>
              {displayData.map((job) => (
                <tr key={job.id} className="border-b border-border/50 transition-colors hover:bg-muted/50">
                  <td className="px-4 py-3 font-medium text-foreground">{job.job_title}</td>
                  <td className="px-4 py-3 text-muted-foreground">{job.company}</td>
                  <td className="px-4 py-3 text-muted-foreground">{job.location}</td>
                  <td className="px-4 py-3 text-muted-foreground">{job.industry}</td>
                  <td className="px-4 py-3 text-right font-mono text-foreground">{formatSalaryFull(job.avg_salary)}</td>
                  <td className="px-4 py-3 text-right text-muted-foreground">{job.experience_required}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      {job.skills.split(",").map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                        >
                          {skill.trim()}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
