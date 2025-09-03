import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Frontend разработка',
      description: 'Полный курс по созданию современных веб-приложений с использованием React, TypeScript и других актуальных технологий',
      duration: '6 месяцев',
      level: 'Начинающий',
      students: 1240,
      price: 'от 15 000 ₽/мес',
      originalPrice: '20 000 ₽/мес',
      modules: 12,
      projects: 8,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      demo: true,
      image: '/img/d60c9df7-c99c-4965-9cad-dc7c669b21e4.jpg'
    },
    {
      id: 2,
      title: 'Python для начинающих',
      description: 'Изучите основы программирования на Python, работу с данными и создание веб-приложений',
      duration: '4 месяца',
      level: 'Начинающий',
      students: 890,
      price: 'от 12 000 ₽/мес',
      originalPrice: '16 000 ₽/мес',
      modules: 8,
      projects: 6,
      technologies: ['Python', 'Django', 'PostgreSQL', 'Git'],
      demo: true,
      image: '/img/40efd2f9-d834-4e69-b2c8-3f9f28871f9c.jpg'
    },
    {
      id: 3,
      title: 'Data Science',
      description: 'Погрузитесь в мир анализа данных, машинного обучения и работы с большими данными',
      duration: '8 месяцев',
      level: 'Продвинутый',
      students: 567,
      price: 'от 18 000 ₽/мес',
      originalPrice: '25 000 ₽/мес',
      modules: 16,
      projects: 10,
      technologies: ['Python', 'TensorFlow', 'Pandas', 'SQL'],
      demo: true,
      image: '/img/0df71c70-860c-4586-947a-3e1c6acb37fd.jpg'
    },
    {
      id: 4,
      title: 'Backend разработка',
      description: 'Создавайте надежные серверные приложения и API с использованием современных технологий',
      duration: '7 месяцев',
      level: 'Средний',
      students: 445,
      price: 'от 16 000 ₽/мес',
      originalPrice: '22 000 ₽/мес',
      modules: 14,
      projects: 9,
      technologies: ['Node.js', 'Express', 'MongoDB', 'Docker'],
      demo: true,
      image: '/img/40efd2f9-d834-4e69-b2c8-3f9f28871f9c.jpg'
    },
    {
      id: 5,
      title: 'Mobile разработка',
      description: 'Создавайте мобильные приложения для iOS и Android с помощью React Native',
      duration: '6 месяцев',
      level: 'Средний',
      students: 320,
      price: 'от 17 000 ₽/мес',
      originalPrice: '23 000 ₽/мес',
      modules: 12,
      projects: 7,
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
      demo: true,
      image: '/img/d60c9df7-c99c-4965-9cad-dc7c669b21e4.jpg'
    },
    {
      id: 6,
      title: 'DevOps и облачные технологии',
      description: 'Освойте современные практики развертывания и управления IT-инфраструктурой',
      duration: '5 месяцев',
      level: 'Продвинутый',
      students: 278,
      price: 'от 19 000 ₽/мес',
      originalPrice: '26 000 ₽/мес',
      modules: 10,
      projects: 8,
      technologies: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
      demo: true,
      image: '/img/0df71c70-860c-4586-947a-3e1c6acb37fd.jpg'
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Начинающий':
        return 'bg-green-100 text-green-800';
      case 'Средний':
        return 'bg-yellow-100 text-yellow-800';
      case 'Продвинутый':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Выберите свой путь в IT
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Практические курсы от экспертов индустрии. Все курсы включают бесплатные демо-уроки
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getLevelColor(course.level)}>
                      {course.level}
                    </Badge>
                    {course.demo && (
                      <Badge variant="outline" className="text-green-700 border-green-300">
                        Бесплатное демо
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {course.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Icon name="Clock" size={16} className="mr-2 text-gray-400" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Icon name="Users" size={16} className="mr-2 text-gray-400" />
                      {course.students} студентов
                    </div>
                    <div className="flex items-center">
                      <Icon name="BookOpen" size={16} className="mr-2 text-gray-400" />
                      {course.modules} модулей
                    </div>
                    <div className="flex items-center">
                      <Icon name="Code" size={16} className="mr-2 text-gray-400" />
                      {course.projects} проектов
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Технологии:</h4>
                    <div className="flex flex-wrap gap-1">
                      {course.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-gray-900">{course.price}</span>
                          <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
                        </div>
                        <span className="text-xs text-green-600">Скидка до конца месяца</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <Button className="w-full">
                        <Icon name="Play" size={16} className="mr-2" />
                        Смотреть демо-урок
                      </Button>
                      <Button variant="outline" className="w-full">
                        Записаться на курс
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Не можете выбрать курс?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/80">
            Запишитесь на бесплатную консультацию, и мы поможем определиться
          </p>
          <Button size="lg" variant="secondary" className="px-8">
            Получить консультацию
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="GraduationCap" size={32} className="text-primary" />
              <span className="text-2xl font-bold">TechSchool</span>
            </div>
            <div className="text-gray-400">
              © 2024 TechSchool. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Courses;