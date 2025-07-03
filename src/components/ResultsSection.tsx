import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function ResultsSection() {
  const testimonials = [
    {
      name: "Анна К.",
      age: "32 года",
      profession: "Менеджер",
      result: "Перестала кричать на детей",
      before: "Срывалась 5-7 раз в день",
      after: "Контролирую эмоции 95% времени",
      time: "2 недели",
      avatar: "👩‍💼",
    },
    {
      name: "Дмитрий В.",
      age: "28 лет",
      profession: "Водитель",
      result: "Спокойно реагирую на дорожные ситуации",
      before: "Постоянные конфликты на дороге",
      after: "Ни одного инцидента за месяц",
      time: "3 недели",
      avatar: "👨‍🚗",
    },
    {
      name: "Елена М.",
      age: "45 лет",
      profession: "Учитель",
      result: "Улучшились отношения с мужем",
      before: "Еженедельные ссоры",
      after: "Конструктивные разговоры",
      time: "1 месяц",
      avatar: "👩‍🏫",
    },
  ];

  const stats = [
    {
      metric: "Снижение вспышек гнева",
      value: 87,
      unit: "%",
      icon: "TrendingDown",
    },
    {
      metric: "Улучшение отношений",
      value: 92,
      unit: "%",
      icon: "Heart",
    },
    {
      metric: "Снижение стресса",
      value: 78,
      unit: "%",
      icon: "Smile",
    },
    {
      metric: "Качество сна",
      value: 85,
      unit: "%",
      icon: "Moon",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Результаты наших студентов
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Реальные истории людей, которые научились контролировать свой гнев
          </p>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon
                  name={stat.icon as any}
                  size={24}
                  className="text-primary"
                />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">
                {stat.value}
                {stat.unit}
              </div>
              <div className="text-sm text-muted-foreground">{stat.metric}</div>
              <Progress value={stat.value} className="mt-3" />
            </Card>
          ))}
        </div>

        {/* Отзывы */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.age}, {testimonial.profession}
                    </div>
                  </div>
                </div>

                <Badge className="mb-4 bg-green-100 text-green-800">
                  <Icon name="CheckCircle" size={16} className="mr-1" />
                  {testimonial.result}
                </Badge>

                <div className="space-y-3">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-sm font-medium text-red-800 mb-1">
                      Было:
                    </div>
                    <div className="text-sm text-red-600">
                      {testimonial.before}
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-sm font-medium text-green-800 mb-1">
                      Стало:
                    </div>
                    <div className="text-sm text-green-600">
                      {testimonial.after}
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <Badge variant="outline" className="text-primary">
                    <Icon name="Clock" size={14} className="mr-1" />
                    Результат за {testimonial.time}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary/5 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-2">
              Хотите такие же результаты?
            </h3>
            <p className="text-muted-foreground mb-4">
              Присоединяйтесь к тысячам людей, которые уже научились
              контролировать свой гнев
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary">
                <Icon name="Users" size={16} className="mr-1" />
                2000+ студентов
              </Badge>
              <Badge variant="secondary">
                <Icon name="Star" size={16} className="mr-1" />
                4.9/5 рейтинг
              </Badge>
              <Badge variant="secondary">
                <Icon name="Award" size={16} className="mr-1" />
                95% успеха
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
