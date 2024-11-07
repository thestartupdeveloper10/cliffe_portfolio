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
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
        <CardDescription className="text-sm">
          {project.category}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="aspect-video rounded-lg overflow-hidden mb-4">
          <img 
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" 
            src={project.images.gallery[0]} 
            alt={project.title}
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