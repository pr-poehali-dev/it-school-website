import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const courses = [
    {
      title: "Frontend разработка",
      description: "Изучите React, TypeScript и современные инструменты веб-разработки",
      duration: "6 месяцев",
      level: "Начинающий",
      students: 1240,
      price: "от 15 000 ₽/мес",
      demo: true
    },
    {
      title: "Python для начинающих",
      description: "Основы программирования на Python, работа с данными и автоматизация",
      duration: "4 месяца",
      level: "Начинающий",
      students: 890,
      price: "от 12 000 ₽/мес",
      demo: true
    },
    {
      title: "Data Science",
      description: "Анализ данных, машинное обучение и работа с большими данными",
      duration: "8 месяцев",
      level: "Продвинутый",
      students: 567,
      price: "от 18 000 ₽/мес",
      demo: true
    }
  ];

  const teachers = [
    {
      name: "Анна Петрова",
      role: "Senior Frontend Developer",
      experience: "8 лет опыта",
      company: "Яндекс",
      image: "img/5024baac-9db8-4167-ba3a-a3e834b7d92e.jpg",
      skills: ["React", "TypeScript", "Node.js"]
    },
    {
      name: "Михаил Иванов", 
      role: "Lead Python Developer",
      experience: "12 лет опыта",
      company: "Сбер",
      image: "img/c1d0b003-6163-4337-b2ba-b4afbea1dea1.jpg",
      skills: ["Python", "Django", "ML"]
    },
    {
      name: "Екатерина Сидорова",
      role: "Data Scientist",
      experience: "6 лет опыта", 
      company: "VK",
      image: "img/7c99f3d7-0a70-4b74-bb04-aa6912a6d282.jpg",
      skills: ["Python", "TensorFlow", "SQL"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <Icon name="Code" size={24} className="text-blue-600" />
              <span className="text-xl font-bold text-gray-900">IT Школа</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#courses" className="text-gray-600 hover:text-gray-900 transition-colors">Курсы</a>
              <a href="#teachers" className="text-gray-600 hover:text-gray-900 transition-colors">Преподаватели</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">О нас</a>
              <Button variant="outline" size="sm">Войти</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Изучайте IT с{' '}
              <span className="text-blue-600">лучшими экспертами</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Получите востребованную IT-профессию за 4-8 месяцев. Начните с бесплатного демо-урока и убедитесь в качестве обучения
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Icon name="Play" size={20} className="mr-2" />
                Начать бесплатно
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на демо-урок
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">2,500+</div>
                <div className="text-sm text-gray-600">Студентов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Трудоустройство</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">4.8</div>
                <div className="text-sm text-gray-600">Рейтинг</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Популярные курсы
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Все курсы включают бесплатные демонстрационные уроки, чтобы вы могли оценить качество обучения
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                      {course.level}
                    </Badge>
                    {course.demo && (
                      <Badge variant="outline" className="text-green-700 border-green-300">
                        Бесплатное демо
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{course.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Icon name="Clock" size={16} className="mr-2 text-gray-400" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Icon name="Users" size={16} className="mr-2 text-gray-400" />
                      {course.students} студентов
                    </div>
                    <div className="flex items-center text-sm font-medium text-gray-900">
                      <Icon name="CreditCard" size={16} className="mr-2 text-gray-400" />
                      {course.price}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <Icon name="Play" size={16} className="mr-2" />
                      Смотреть демо-урок
                    </Button>
                    <Button variant="outline" className="w-full">
                      Подробнее о курсе
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Наши преподаватели
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Эксперты из топовых IT-компаний с многолетним опытом разработки и преподавания
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <Card key={index} className="border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                      <img 
                        src={teacher.image} 
                        alt={teacher.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{teacher.name}</h3>
                    <p className="text-blue-600 text-sm font-medium mb-1">{teacher.role}</p>
                    <p className="text-gray-600 text-sm mb-2">{teacher.company} • {teacher.experience}</p>
                    
                    <div className="flex flex-wrap gap-1 justify-center mt-4">
                      {teacher.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="text-xs bg-gray-100 text-gray-700"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Начните свой путь в IT уже сегодня
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Посетите бесплатный демо-урок и убедитесь в качестве нашего обучения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-50 border-white px-8 py-3">
              <Icon name="Play" size={20} className="mr-2" />
              Записаться на демо-урок
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700 px-8 py-3">
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Code" size={24} className="text-blue-400" />
                <span className="text-xl font-bold">IT Школа</span>
              </div>
              <p className="text-gray-400 text-sm">
                Лучшее IT-образование для построения успешной карьеры в технологиях
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Курсы</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Frontend разработка</div>
                <div>Python</div>
                <div>Data Science</div>
                <div>Backend разработка</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Помощь</div>
                <div>FAQ</div>
                <div>Контакты</div>
                <div>Отзывы</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (800) 123-45-67
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@itschool.ru
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 IT Школа. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;