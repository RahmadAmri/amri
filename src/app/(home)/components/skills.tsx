import { SKILLS } from "@/lib/config";

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
