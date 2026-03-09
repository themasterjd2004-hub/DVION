"use client";

import { useMemo, useState } from "react";

const options = [
  { key: "website", label: "Website", base: 700 },
  { key: "ai", label: "AI System", base: 2200 },
  { key: "automation", label: "Automation", base: 1400 },
  { key: "mobile", label: "Mobile App", base: 1600 }
];

export default function BuildEstimator() {
  const [selected, setSelected] = useState<string[]>(["website"]);

  const estimatedCost = useMemo(() => {
    return selected.reduce((total, key) => {
      const item = options.find((option) => option.key === key);
      return total + (item?.base ?? 0);
    }, 0);
  }, [selected]);

  const toggleSelection = (value: string) => {
    setSelected((current) =>
      current.includes(value) ? current.filter((item) => item !== value) : [...current, value]
    );
  };

  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="font-heading text-2xl font-semibold text-frost">Build Your Software</h3>
      <p className="mt-2 text-slate">
        Select one or more product types to get a quick project estimate.
      </p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {options.map((option) => (
          <label
            key={option.key}
            className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-700 p-3"
          >
            <input
              type="checkbox"
              checked={selected.includes(option.key)}
              onChange={() => toggleSelection(option.key)}
              className="h-4 w-4 accent-cyan"
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
      <p className="mt-6 text-lg">
        Estimated starting cost:{" "}
        <span className="font-bold text-cyan">${estimatedCost.toLocaleString()}</span>
      </p>
    </div>
  );
}
