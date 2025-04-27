"use client";

import { experiences as experiencesData } from "@/data/portfolio-data";

type Experience = {
  company: string;
  position: string;
  type: string;
  location: string;
  period: string;
  responsibilities: string[];
};

export function ExperienceSection() {
  return (
    <div className="space-y-12">
      {experiencesData.map((exp) => (
        <ExperienceCard
          key={`${exp.company}-${exp.position}`}
          experience={exp}
        />
      ))}
    </div>
  );
}

function ExperienceCard({ experience }: { experience: Experience }) {
  const { company, position, type, location, period, responsibilities } = experience;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold">{company}</h3>
          <div className="flex items-center space-x-2 mt-1">
            <span className="px-2 py-0.5 bg-zinc-200 dark:bg-zinc-800 rounded text-sm">
              {type}
            </span>
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              {location}
            </span>
          </div>
        </div>
        <span className="text-sm text-zinc-500 dark:text-zinc-400">{period}</span>
      </div>

      <h4 className="text-lg font-medium">{position}</h4>

      <ul className="space-y-2 list-disc pl-5">
        {responsibilities.map((item) => (
          <li
            key={item.substring(0, 20)}
            className="text-zinc-700 dark:text-zinc-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
