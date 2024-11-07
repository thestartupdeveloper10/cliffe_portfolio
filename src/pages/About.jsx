import SkillCard from "@/components/SkillCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { skillsData } from "@/assets/skilldata";
import HeroIMG from "@/assets/imgs/hero.png"
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 gap-6 p-4 pt-10 md:pt-20 px-4 md:px-16" id="about">
      <motion.div
      
      // initial={{ opacity: 0, y: 80 }}
      // whileInView={{ opacity: 1, y: 0 , transition: { duration: 0.6, ease: "easeOut" } }}
      // viewport={{ once: true }}
      className="md:col-span-4 md:-mt-14">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Technical Skills</CardTitle>
            <CardDescription>Comprehensive overview of my technical expertise</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SkillCard 
              title={skillsData.webDevelopment.title}
              description={skillsData.webDevelopment.description}
              skills={skillsData.webDevelopment.skills}
            />
            <SkillCard 
              title={skillsData.mobileDevelopment.title}
              description={skillsData.mobileDevelopment.description}
              skills={skillsData.mobileDevelopment.skills}
            />
            <SkillCard 
              className="md:col-span-2"
              title={skillsData.machineLearning.title}
              description={skillsData.machineLearning.description}
              skills={skillsData.machineLearning.skills}
            />
          </CardContent>
        </Card>
      </motion.div>
      <motion.div 
      // initial={{ opacity: 0, x:100 }}
      // whileInView={{ opacity: 1, x: 0 , transition: { duration: 0.6, ease: "easeOut" } }}
      // viewport={{ once: true }}
      className="md:col-span-3 md:-ml-10 md:mb-10 z-10">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>About Me</CardTitle>
            <CardDescription>Full-stack Developer & ML Engineer</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center md:items-start">
            <motion.img
            whileHover={{ scale: 1.1,boxShadow: "0px 0px 20px 2px rgba(0, 0, 0, 0.2)" }}
            transition={{ duration: 0.3}}
              className="h-32 w-32 rounded-full bg-slate-200  object-cover border-4 border-gray-200 dark:border-gray-400 border-spacing-2"
              src={HeroIMG}
              alt=""
            />
          </CardContent>
          <CardContent>
            <p className="text-gray-600 text-center md:text-start">
              A passionate developer with expertise in full-stack development and machine learning.
              Committed to creating efficient, scalable solutions across web, mobile, and AI domains.
            </p>
          </CardContent>
          <CardHeader>
          <CardTitle>Hobbies</CardTitle>
          </CardHeader>
          <CardFooter className="grid grid-cols-2 md:flex flex-row gap-2">
            <Badge variant="secondary">
              <span className="font-semibold">Coding</span>
            </Badge>
            <Badge variant="secondary">
              <span className="font-semibold">Travelling</span>
            </Badge>
            <Badge variant="secondary">
              <span className="font-semibold">Football</span>
            </Badge>
            <Badge variant="secondary">
              <span className="font-semibold">Reading</span>
            </Badge>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}