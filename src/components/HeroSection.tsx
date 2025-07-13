import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-center mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: 1 }}
            >
              <Icon name="Zap" size={48} className="text-yellow-300 mr-3" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold">
              ХВАТИТ ВЗРЫВАТЬСЯ
            </h1>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl mb-8 text-primary-foreground/90"
          >
            Школа управления злостью для тех, кто устал от собственных эмоций
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-white/10 rounded-lg p-6 mb-8 backdrop-blur-sm"
          >
            <motion.p 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-lg md:text-xl mb-4"
            >
              🔥 Каждый день теряете контроль?
            </motion.p>
            <motion.p 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="text-lg md:text-xl mb-4"
            >
              😤 Портите отношения из-за вспышек гнева?
            </motion.p>
            <motion.p 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="text-lg md:text-xl"
            >
              💥 Устали от последствий своих эмоций?
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3"
              >
                <Icon name="PlayCircle" size={20} className="mr-2" />
                НАЧАТЬ СЕЙЧАС
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3"
              >
                <Icon name="Users" size={20} className="mr-2" />
                ИСТОРИИ УСПЕХА
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="text-center"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.0, duration: 0.5, type: "spring" }}
                className="text-3xl font-bold mb-2"
              >
                2000+
              </motion.div>
              <div className="text-primary-foreground/80">студентов</div>
            </motion.div>
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.0, duration: 0.5 }}
              className="text-center"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.2, duration: 0.5, type: "spring" }}
                className="text-3xl font-bold mb-2"
              >
                95%
              </motion.div>
              <div className="text-primary-foreground/80">
                контролируют гнев
              </div>
            </motion.div>
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.5 }}
              className="text-center"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.4, duration: 0.5, type: "spring" }}
                className="text-3xl font-bold mb-2"
              >
                7 дней
              </motion.div>
              <div className="text-primary-foreground/80">
                до первых результатов
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}