import { Play, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import drivingImage from "@/assets/driving-lesson.jpg";

interface Module {
  id: number;
  title: string;
  locked: boolean;
}

const CourseCard = () => {
  const modules: Module[] = [
    { id: 1, title: "Модуль 1", locked: true },
    { id: 2, title: "Модуль 2", locked: true },
    { id: 3, title: "Модуль 3", locked: true },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto bg-card rounded-3xl shadow-lg p-6 md:p-8">
      <div className="space-y-6">
        {/* Category Label */}
        <p className="text-sm text-muted-foreground font-medium">Видеоуроки</p>

        {/* Course Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
          Обучение
          <br />в автошколе
        </h1>

        {/* Video Preview */}
        <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
          <img
            src={drivingImage}
            alt="Обучение вождению"
            className="w-full h-auto object-cover aspect-video"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground fill-current ml-1" />
            </div>
          </div>
        </div>

        {/* Course Info */}
        <div className="space-y-2">
          <h2 className="text-xl md:text-2xl font-bold text-foreground">
            Основы управления автомобилем
          </h2>
          <p className="text-muted-foreground text-lg">0/3</p>
        </div>

        {/* Modules List */}
        <div className="space-y-3">
          {modules.map((module) => (
            <div
              key={module.id}
              className="flex items-center justify-between p-4 bg-locked rounded-xl"
            >
              <span className="text-lg font-semibold text-locked-foreground">
                {module.title}
              </span>
              <Lock className="w-5 h-5 text-locked-foreground" />
            </div>
          ))}
        </div>

        {/* Test Button */}
        <Button
          size="lg"
          className="w-full h-14 text-lg font-semibold rounded-2xl"
        >
          Тест
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
