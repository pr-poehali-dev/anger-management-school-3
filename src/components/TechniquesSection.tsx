import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";


export default function TechniquesSection() {
  const techniques = [
    {
      title: "Техника 4-7-8",
      subtitle: "Дыхательная практика",
      description:
        "Вдох на 4 счета, задержка на 7, выдох на 8. Мгновенно снижает уровень стресса.",
      icon: "Wind",
      time: "30 сек",
      difficulty: "Легко",
    },
    {
      title: "Стоп-техника",
      subtitle: "Контроль реакции",
      description:
        "СТОП → Остановиться → Подумать → Решить → Действовать. Разрывает автоматические реакции.",
      icon: "StopCircle",
      time: "1 мин",
      difficulty: "Легко",
    },
    {
      title: "Техника заземления",
      subtitle: "Переключение внимания",
      description:
        "5 вещей, которые видите, 4 которые слышите, 3 которые чувствуете, 2 которые пахнут, 1 которую можете попробовать.",
      icon: "Anchor",
      time: "2 мин",
      difficulty: "Средне",
    },
    {
      title: "Переформулировка",
      subtitle: "Изменение мышления",
      description:
        "Заменяете негативные мысли на нейтральные или позитивные. Меняет восприятие ситуации.",
      icon: "RefreshCcw",
      time: "3 мин",
      difficulty: "Средне",
    },
    {
      title: "Техника тайм-аута",
      subtitle: "Физическое дистанцирование",
      description:
        "Покидаете ситуацию на 10-15 минут. Даете эмоциям остыть перед принятием решений.",
      icon: "Clock",
      time: "15 мин",
      difficulty: "Легко",
    },
    {
      title: "Прогрессивная релаксация",
      subtitle: "Снятие телесного напряжения",
      description:
        "Последовательное напряжение и расслабление мышц. Убирает физические проявления злости.",
      icon: "Waves",
      time: "10 мин",
      difficulty: "Сложно",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Практические техники
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Проверенные методы управления гневом, которые работают уже сегодня
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techniques.map((technique, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon
                      name={technique.icon as any}
                      size={24}
                      className="text-primary"
                    />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold">
                      {technique.time}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {technique.difficulty}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl">{technique.title}</CardTitle>
                <p className="text-sm text-primary font-medium">
                  {technique.subtitle}
                </p>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {technique.description}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <Icon name="Play" size={16} className="mr-2" />
                  Попробовать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Icon name="BookOpen" size={20} className="mr-2" />
            Изучить все техники
          </Button>
        </div>
      </div>
    </section>
  );
}