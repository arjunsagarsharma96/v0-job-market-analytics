"use client"

import { Button } from "@/components/ui/button"
import { X, Check, Filter } from "lucide-react"

interface FilterSidebarProps {
  jobTitles: string[]
  locations: string[]
  selectedJobTitles: string[]
  selectedLocations: string[]
  onJobTitlesChange: (titles: string[]) => void
  onLocationsChange: (locations: string[]) => void
  open: boolean
  onClose: () => void
}

function FilterGroup({
  label,
  options,
  selected,
  onChange,
}: {
  label: string
  options: string[]
  selected: string[]
  onChange: (values: string[]) => void
}) {
  const allSelected = selected.length === options.length
  const toggleAll = () => {
    onChange(allSelected ? [] : [...options])
  }
  const toggle = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value))
    } else {
      onChange([...selected, value])
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">{label}</h3>
        <button
          type="button"
          onClick={toggleAll}
          className="text-xs text-primary hover:underline"
        >
          {allSelected ? "Clear all" : "Select all"}
        </button>
      </div>
      <div className="space-y-1">
        {options.map((option) => {
          const isSelected = selected.includes(option)
          return (
            <button
              key={option}
              type="button"
              onClick={() => toggle(option)}
              className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${
                isSelected
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <div
                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                  isSelected
                    ? "border-primary bg-primary"
                    : "border-border bg-card"
                }`}
              >
                {isSelected && <Check className="h-3 w-3 text-primary-foreground" />}
              </div>
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export function FilterSidebar({
  jobTitles,
  locations,
  selectedJobTitles,
  selectedLocations,
  onJobTitlesChange,
  onLocationsChange,
  open,
  onClose,
}: FilterSidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden"
          onClick={onClose}
          onKeyDown={(e) => e.key === "Escape" && onClose()}
          role="button"
          tabIndex={0}
          aria-label="Close filters"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 border-r border-border bg-card p-6 transition-transform lg:sticky lg:top-0 lg:z-0 lg:h-screen lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">Filters</h2>
            </div>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={onClose}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close filters</span>
            </Button>
          </div>

          <div className="mt-6 flex-1 space-y-6 overflow-y-auto">
            <FilterGroup
              label="Job Title"
              options={jobTitles}
              selected={selectedJobTitles}
              onChange={onJobTitlesChange}
            />
            <FilterGroup
              label="Location"
              options={locations}
              selected={selectedLocations}
              onChange={onLocationsChange}
            />
          </div>

          <div className="mt-4 border-t border-border pt-4">
            <p className="text-xs text-muted-foreground">
              {selectedJobTitles.length} title{selectedJobTitles.length !== 1 ? "s" : ""},{" "}
              {selectedLocations.length} location{selectedLocations.length !== 1 ? "s" : ""} selected
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}
