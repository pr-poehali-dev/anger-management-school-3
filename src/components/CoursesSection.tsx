import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function CoursesSection() {
  const courses = [
    {
      title: "Базовый курс",
      subtitle: "Для чайников",
      price: "₽2,990",
      duration: "2 недели",
      icon: "BookOpen",
      features: [
        "Основы управления гневом",
        "5 главных техник",
        "Практические упражнения",
        "Поддержка в чате",
      ],
      isPopular: false,
    },
    {
      title: "Продвинутый курс",
      subtitle: "Глубокая работа",
      price: "₽5,990",
      duration: "1 месяц",
      icon: "Target",
      features: [
        "Все техники базового курса",
        "Работа с триггерами",
        "Индивидуальные консультации",
        "Групповые практики",
        "Сертификат",
      ],
      isPopular: true,
    },
    {
      title: "VIP сопровождение",
      subtitle: "Персональный подход",
      price: "₽12,990",
      duration: "3 месяца",
      icon: "Crown",
      features: [
        "Персональный психолог",
        "Индивидуальный план",
        "Экстренная поддержка 24/7",
        "Работа с семьей",
        "Пожизненный доступ",
      ],
      isPopular: false,
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Выберите свой путь к спокойствию
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Три уровня обучения для тех, кто готов изменить свою жизнь
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className={`relative ${course.isPopular ? "border-primary border-2 shadow-lg" : ""}`}
            >
              {course.isPopular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  ПОПУЛЯРНЫЙ
                </Badge>
              )}

              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon
                      name={course.icon as any}
                      size={32}
                      className="text-primary"
                    />
                  </div>
                </div>
                <CardTitle className="text-2xl mb-2">{course.title}</CardTitle>
                <p className="text-muted-foreground">{course.subtitle}</p>
                <div className="mt-4">
                  <div className="text-3xl font-bold text-primary">
                    {course.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {course.duration}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {course.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Icon
                        name="Check"
                        size={20}
                        className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${course.isPopular ? "bg-primary hover:bg-primary/90" : ""}`}
                  variant={course.isPopular ? "default" : "outline"}
                >
                  Выбрать курс
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
