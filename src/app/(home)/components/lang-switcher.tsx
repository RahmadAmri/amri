"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { DynamicIcon, IconName } from "lucide-react/dynamic";

const THEMES_OPTION = [
  { value: "system", label: "System", icon: "sun-moon" },
  { value: "light", label: "Light", icon: "sun" },
  { value: "dark", label: "Dark", icon: "moon" },
];

export default function LangSwitcher() {
  const { theme, setTheme } = useTheme();

  const icon = THEMES_OPTION.find((e) => e.value === theme)?.icon as IconName;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="h-fit border p-2 rounded-md">
        {icon ? <DynamicIcon name={icon} size={20} /> : null}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {THEMES_OPTION.map((e) => {
          return (
            <DropdownMenuItem key={e.label} onClick={() => setTheme(e.value)}>
              {e.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
