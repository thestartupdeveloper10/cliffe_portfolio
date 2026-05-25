// src/components/SmallProjectCard.js
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function SmallProjectCard({ project }) {
  return (
    <Card className="h-full transition-shadow duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
        <CardDescription className="text-sm">
          {project.category}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 overflow-hidden rounded-lg aspect-video">
          <img
            className="object-contain w-full h-full transition-transform duration-300 hover:scale-105"
            src={project.images.gallery[0]}
            alt={project.title}
            style={{ outline: "1px solid rgba(0,0,0,0.08)" }}
          />
        </div>
        <p className="text-sm text-gray-600 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full"
          >
            View Live Project
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}