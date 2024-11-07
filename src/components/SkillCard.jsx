import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { cn } from "@/lib/utils";
  
  export default function SkillCard({ title, description, skills, className }) {
    return (
      <div className={cn("", className)}>
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <div 
                  key={skill.name} 
                  className=" flex-col flex lg:flex-row items-center gap-2 p-2 rounded-lg dark:hover:bg-slate-900 hover:bg-gray-50"
                >
                  <skill.icon className="w-6 h-6 text-indigo-600" />
                  <div className="flex flex-col">
                    <span className="text-sm text-center font-medium">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }