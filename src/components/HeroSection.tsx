import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { TextRotate } from "@/components/ui/text-rotate";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Icon name="Zap" size={48} className="text-yellow-300 mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold flex flex-wrap items-center justify-center gap-4">
              <span>ХВАТИТ</span>
              <TextRotate
                texts={[
                  "ВЗРЫВАТЬСЯ! 💥",
                  "КРИЧАТЬ! 😡", 
                  "СРЫВАТЬСЯ! 🔥",
                  "БЕСИТЬ! 😤"
                ]}
                mainClassName="text-yellow-300 bg-white/20 px-4 py-2 rounded-xl border-2 border-yellow-300/30"
                staggerFrom="center"
                staggerDuration={0.08}
                rotationInterval={2500}
                transition={{ type: "spring", damping: 20, stiffness: 400 }}
              />
            </h1>
          </div>

          <div className="text-xl md:text-2xl mb-8 text-primary-foreground/90 flex flex-wrap justify-center items-center gap-2">
            <span>Школа управления</span>
            <TextRotate
              texts={[
                "ЗЛОСТЬЮ",
                "ГНЕВОМ", 
                "СТРЕССОМ",
                "ЭМОЦИЯМИ"
              ]}
              mainClassName="text-yellow-300 font-bold px-3 py-1 bg-white/20 rounded-lg"
              staggerFrom="first"
              staggerDuration={0.05}
              rotationInterval={3000}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            />
            <span>для тех, кто устал</span>
          </div>

          <div className="bg-white/10 rounded-lg p-6 mb-8 backdrop-blur-sm">
            <p className="text-lg md:text-xl mb-4">
              🔥 Каждый день теряете контроль?
            </p>
            <p className="text-lg md:text-xl mb-4">
              😤 Портите отношения из-за вспышек гнева?
            </p>
            <p className="text-lg md:text-xl">
              💥 Устали от последствий своих эмоций?
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3"
            >
              <Icon name="PlayCircle" size={20} className="mr-2" />
              НАЧАТЬ СЕЙЧАС
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3"
            >
              <Icon name="Users" size={20} className="mr-2" />
              ИСТОРИИ УСПЕХА
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">2000+</div>
              <div className="text-primary-foreground/80">студентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-primary-foreground/80">
                контролируют гнев
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">7 дней</div>
              <div className="text-primary-foreground/80">
                до первых результатов
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}