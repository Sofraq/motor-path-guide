import CourseCard from "@/components/CourseCard";
import basicDrivingImage from "@/assets/basic-driving.jpg";
import trafficRulesImage from "@/assets/traffic-rules.jpg";
import roadSafetyImage from "@/assets/road-safety.jpg";
import carMaintenanceImage from "@/assets/car-maintenance.jpg";
import firstAidImage from "@/assets/first-aid.jpg";
import driverPsychologyImage from "@/assets/driver-psychology.jpg";
import cityDrivingImage from "@/assets/city-driving.jpg";
import highwayDrivingImage from "@/assets/highway-driving.jpg";
import parkingImage from "@/assets/parking.jpg";

const Index = () => {
  const courses = [
    {
      id: 1,
      category: "Відеоуроки",
      title: "Навчання в автошколі",
      subtitle: "Основи керування автомобілем",
      progress: "0/3",
      imageUrl: basicDrivingImage,
      modules: [
        { id: 1, title: "Модуль 1", subtitle: "Посадка, дзеркала, ремені безпеки", locked: true },
        { id: 2, title: "Модуль 2", subtitle: "Педалі, зчеплення, передачі", locked: true },
        { id: 3, title: "Модуль 3", subtitle: "Кермування та координація", locked: true },
      ],
    },
    {
      id: 2,
      category: "Теорія",
      title: "Правила дорожнього руху",
      subtitle: "Фундаментальні знання ПДР",
      progress: "0/3",
      imageUrl: trafficRulesImage,
      modules: [
        { id: 1, title: "Модуль 1", subtitle: "Дорожні знаки та розмітка", locked: true },
        { id: 2, title: "Модуль 2", subtitle: "Пріоритет на дорозі", locked: true },
        { id: 3, title: "Модуль 3", subtitle: "Маневрування та швидкісний режим", locked: true },
      ],
    },
    {
      id: 3,
      category: "Безпека",
      title: "Безпека дорожнього руху",
      subtitle: "Запобігання аварійним ситуаціям",
      progress: "0/3",
      imageUrl: roadSafetyImage,
      modules: [
        { id: 1, title: "Модуль 1", subtitle: "Аварійні ситуації", locked: true },
        { id: 2, title: "Модуль 2", subtitle: "Дистанція та бічний інтервал", locked: true },
        { id: 3, title: "Модуль 3", subtitle: "Рух у складних умовах", locked: true },
      ],
    },
    {
      id: 4,
      category: "Технічна підготовка",
      title: "Пристрій та обслуговування автомобіля",
      subtitle: "Технічні знання водія",
      progress: "0/3",
      imageUrl: carMaintenanceImage,
      modules: [
        { id: 1, title: "Модуль 1", subtitle: "Основні вузли та агрегати", locked: true },
        { id: 2, title: "Модуль 2", subtitle: "Щоденне обслуговування", locked: true },
        { id: 3, title: "Модуль 3", subtitle: "Несправності та усунення", locked: true },
      ],
    },
    {
      id: 5,
      category: "Медична підготовка",
      title: "Перша домедична допомога",
      subtitle: "Надання допомоги при ДТП",
      progress: "0/3",
      imageUrl: firstAidImage,
      modules: [
        { id: 1, title: "Модуль 1", subtitle: "Оцінка стану потерпілого", locked: true },
        { id: 2, title: "Модуль 2", subtitle: "Невідкладні заходи", locked: true },
        { id: 3, title: "Модуль 3", subtitle: "Транспортування потерпілих", locked: true },
      ],
    },
    {
      id: 6,
      category: "Психологія",
      title: "Психологія водія",
      subtitle: "Психологічна підготовка до керування",
      progress: "0/3",
      imageUrl: driverPsychologyImage,
      modules: [
        { id: 1, title: "Модуль 1", subtitle: "Увага та концентрація", locked: true },
        { id: 2, title: "Модуль 2", subtitle: "Поведінка на дорозі", locked: true },
        { id: 3, title: "Модуль 3", subtitle: "Стресові ситуації", locked: true },
      ],
    },
    {
      id: 7,
      category: "Практичні навички",
      title: "Рух у населених пунктах",
      subtitle: "Особливості міського руху",
      progress: "0/1",
      imageUrl: cityDrivingImage,
      modules: [
        { id: 1, title: "Модуль 1", subtitle: "Правила руху в місті", locked: true },
      ],
    },
    {
      id: 8,
      category: "Практичні навички",
      title: "Рух поза населеними пунктами",
      subtitle: "Їзда на трасі та заміській дорозі",
      progress: "0/1",
      imageUrl: highwayDrivingImage,
      modules: [
        { id: 1, title: "Модуль 1", subtitle: "Особливості заміського руху", locked: true },
      ],
    },
    {
      id: 9,
      category: "Практичні навички",
      title: "Паркування та зупинка",
      subtitle: "Техніка паркування різних типів",
      progress: "0/1",
      imageUrl: parkingImage,
      modules: [
        { id: 1, title: "Модуль 1", subtitle: "Види паркування", locked: true },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background py-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
          DriveZone
        </h1>
        <div className="grid gap-8 md:gap-12">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              category={course.category}
              title={course.title}
              subtitle={course.subtitle}
              progress={course.progress}
              modules={course.modules}
              imageUrl={course.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
