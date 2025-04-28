"use client";

import { experiences as experiencesData } from "@/data/portfolio-data";

type Experience = {
  company: string;
  position: string;
  type: string;
  location: string;
  period: string;
  achievements: string[];
  responsibilities?: { [key: string]: string[] };
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
  const { company, position, type, location, period, achievements, responsibilities } = experience;

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
        {achievements.map((item, index) => (
          <li
            key={`${experience.company}-achievement-${index}`}
            className="text-zinc-700 dark:text-zinc-300"
          >
            {item}
          </li>
        ))}
      </ul>

      {responsibilities && Object.entries(responsibilities).map(([category, items]) => (
        <div key={`${experience.company}-${category}`} className="space-y-2">
          <h5 className="font-medium text-zinc-800 dark:text-zinc-200">{category}</h5>
          <ul className="space-y-1 list-disc pl-5">
            {items.map((item, idx) => (
              <li
                key={`${experience.company}-${category}-${idx}`}
                className="text-zinc-700 dark:text-zinc-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

