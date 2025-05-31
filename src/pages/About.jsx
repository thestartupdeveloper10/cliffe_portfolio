import GlassIcons from "@/components/GlassIcons";
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
import TiltedCard from "@/components/TiltedCard";

export default function About() {
  // Transform skill data for GlassIcons format
  const webDevIcons = skillsData.webDevelopment.skills.map(skill => ({
    icon: <skill.icon className="w-6 h-6 text-white" />,
    label: skill.name,
    color: "blue",
  }));

  const mobileDevIcons = skillsData.mobileDevelopment.skills.map(skill => ({
    icon: <skill.icon className="w-6 h-6 text-white" />,
    label: skill.name,
    color: "purple",
  }));

  const mlIcons = skillsData.machineLearning.skills.map(skill => ({
    icon: <skill.icon className="w-6 h-6 text-white" />,
    label: skill.name,
    color: "indigo",
  }));

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
          <CardContent className="space-y-8">
            {/* Web Development Skills */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{skillsData.webDevelopment.title}</h3>
              <p className="text-sm text-gray-500 mb-6">{skillsData.webDevelopment.description}</p>
              <GlassIcons items={webDevIcons} className="gap-4" />
            </div>

            {/* Mobile Development Skills */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{skillsData.mobileDevelopment.title}</h3>
              <p className="text-sm text-gray-500 mb-6">{skillsData.mobileDevelopment.description}</p>
              <GlassIcons items={mobileDevIcons} className="gap-4" />
            </div>

            {/* Machine Learning Skills */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{skillsData.machineLearning.title}</h3>
              <p className="text-sm text-gray-500 mb-6">{skillsData.machineLearning.description}</p>
              <GlassIcons items={mlIcons} className="gap-4" />
            </div>
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
          <CardContent className="flex flex-col items-center justify-center md:py-10">
           <TiltedCard
                    imageSrc={HeroIMG}
                    altText="Cliffe ibande"
                    captionText="Cliffe ibande -"
                    containerHeight="300px"
                    containerWidth="300px"
                    imageHeight="300px"
                    imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text">
                        Cliffe ibande -
                      </p>
                    }/>
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