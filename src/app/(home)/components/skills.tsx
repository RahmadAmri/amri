const SKILLS = [
  {
    label: "Programming Languages",
    skill: ["JavaScript", "TypeScript"],
  },
  {
    label: "Front-End",
    skill: [
      "React",
      "React Native",
      "Redux",
      "HTML",
      "CSS",
      "Apollo Client",
      "Next.js",
    ],
  },
  {
    label: "Back-End",
    skill: [
      "Node.js",
      "Express.js",
      "Sequelize",
      "PostgreSQL",
      "GraphQL",
      "Apollo Server",
      "MongoDB",
      "Redis",
      "REST API",
    ],
  },
  {
    label: "Languages",
    skill: [
      "Indonesian (Native)",
      "English (Fluent)",
      "Russian (Professional Working Proficiency)",
    ],
  },
];

export default function Skills() {
  return (
    <div className="flex flex-col gap-2">
      <p className="border-b border-foreground">
        <strong>Skills</strong>
      </p>
      <ul className="flex flex-col gap-2">
        {SKILLS.map((e) => {
          return (
            <li key={e.label} className="flex flex-col">
              <p className="font-medium text-muted-foreground">{e.label}</p>
              <small>{e.skill.join(", ")}</small>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
