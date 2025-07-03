import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function StopAngerSection() {
  const situations = [
    {
      title: "Бесят коллеги",
      description:
        "Постоянно отвлекают, не делают свою работу, создают проблемы",
      solutions: [
        "Техника границ",
        "Ассертивное общение",
        "Управление ожиданиями",
      ],
      icon: "Briefcase",
      urgency: "high",
    },
    {
      title: "Дети не слушаются",
      description: "Истерики, непослушание, постоянные капризы и требования",
      solutions: [
        "Позитивная дисциплина",
        "Техника тайм-аута",
        "Эмоциональное зеркало",
      ],
      icon: "Baby",
      urgency: "high",
    },
    {
      title: "Проблемы в отношениях",
      description: "Постоянные ссоры с партнером, непонимание, обиды",
      solutions: ["Техника активного слушания", "Я-сообщения", "Компромиссы"],
      icon: "Heart",
      urgency: "medium",
    },
    {
      title: "Стресс на дороге",
      description: "Пробки, неадекватные водители, нарушения ПДД",
      solutions: [
        "Дыхательные техники",
        "Переформулировка",
        "Музыкальная терапия",
      ],
      icon: "Car",
      urgency: "medium",
    },
    {
      title: "Бытовые проблемы",
      description: "Сломалось что-то дома, не работает интернет, очереди",
      solutions: ["Техника принятия", "Фокус на решении", "Юмор как защита"],
      icon: "Home",
      urgency: "low",
    },
    {
      title: "Социальные сети",
      description: "Глупые комментарии, троллинг, негативные новости",
      solutions: [
        "Цифровой детокс",
        "Фильтрация контента",
        "Ограничение времени",
      ],
      icon: "Smartphone",
      urgency: "low",
    },
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getUrgencyText = (urgency: string) => {
    switch (urgency) {
      case "high":
        return "Критично";
      case "medium":
        return "Важно";
      case "low":
        return "Можно решить";
      default:
        return "Неизвестно";
    }
  };

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Перестать бесить: решения для каждой ситуации
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Найдите свою проблему и получите конкретные техники для её решения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {situations.map((situation, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon
                      name={situation.icon as any}
                      size={24}
                      className="text-primary"
                    />
                  </div>
                  <Badge className={getUrgencyColor(situation.urgency)}>
                    {getUrgencyText(situation.urgency)}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{situation.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  {situation.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="text-sm font-medium">Решения:</div>
                  {situation.solutions.map((solution, solutionIndex) => (
                    <div key={solutionIndex} className="flex items-center">
                      <Icon
                        name="CheckCircle"
                        size={16}
                        className="text-green-500 mr-2 flex-shrink-0"
                      />
                      <span className="text-sm">{solution}</span>
                    </div>
                  ))}
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  <Icon name="ArrowRight" size={16} className="mr-2" />
                  Изучить решения
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-primary text-primary-foreground">
            <CardContent className="p-8">
              <Icon name="Lightbulb" size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Не нашли свою ситуацию?
              </h3>
              <p className="mb-6 text-primary-foreground/90">
                Опишите свою проблему, и мы дадим персональные рекомендации
              </p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Получить персональный совет
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
