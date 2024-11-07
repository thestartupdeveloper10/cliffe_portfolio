// src/components/LargeProjectCard.js
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { Badge } from "@/components/ui/badge";
  
  export default function LargeProjectCard({ project }) {
    return (
      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
              <CardDescription className="text-sm mt-2">
                {project.category}
              </CardDescription>
            </div>
            <Button variant="outline" asChild>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                View Live
              </a>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.images.gallery.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <img 
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" 
                  src={image} 
                  alt={`${project.title} - Image ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <p className="mt-4 text-gray-600">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }