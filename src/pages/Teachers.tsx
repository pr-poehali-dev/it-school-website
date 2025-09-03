import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';

const Teachers = () => {
  const teachers = [
    {
      id: 1,
      name: 'Анна Петрова',
      role: 'Senior Frontend Developer',
      experience: '8 лет опыта',
      company: 'Яндекс',
      image: '/img/a8582a1b-4a7b-403f-8c54-d7273f766647.jpg',
      skills: ['React', 'TypeScript', 'Node.js', 'GraphQL'],
      students: 340,
      rating: 4.9,
      courses: ['Frontend разработка', 'React продвинутый'],
      bio: 'Ведущий фронтенд-разработчик в Яндексе. Специализируется на создании масштабируемых веб-приложений и обучении современным технологиям разработки.',
      achievements: ['Спикер на конференциях', 'Автор статей на Хабре', 'Ментор 200+ разработчиков']
    },
    {
      id: 2,
      name: 'Михаил Иванов',
      role: 'Lead Python Developer',
      experience: '12 лет опыта',
      company: 'Сбер',
      image: '/img/d5f268ca-17d0-4506-9a34-dd41ceadb2c4.jpg',
      skills: ['Python', 'Django', 'ML', 'PostgreSQL'],
      students: 280,
      rating: 4.8,
      courses: ['Python для начинающих', 'Backend разработка'],
      bio: 'Руководитель команды разработки в Сбере. Эксперт в области Python и машинного обучения с 12-летним опытом создания высоконагруженных систем.',
      achievements: ['Сертификация AWS', 'Участник OpenSource проектов', 'Наставник стартапов']
    },
    {
      id: 3,
      name: 'Екатерина Сидорова',
      role: 'Data Scientist',
      experience: '6 лет опыта',
      company: 'VK',
      image: '/img/ffae629a-5132-4436-a5c3-9d57bcb77f20.jpg',
      skills: ['Python', 'TensorFlow', 'SQL', 'R'],
      students: 195,
      rating: 4.9,
      courses: ['Data Science', 'Машинное обучение'],
      bio: 'Ведущий специалист по данным в VK. Разрабатывает ML-модели для рекомендательных систем и анализирует поведение миллионов пользователей.',
      achievements: ['PhD в Computer Science', 'Публикации в Nature', 'Победитель Kaggle соревнований']
    },
    {
      id: 4,
      name: 'Дмитрий Козлов',
      role: 'Senior DevOps Engineer',
      experience: '10 лет опыта',
      company: 'Ozon',
      image: '/img/d5f268ca-17d0-4506-9a34-dd41ceadb2c4.jpg',
      skills: ['Docker', 'Kubernetes', 'AWS', 'Terraform'],
      students: 150,
      rating: 4.7,
      courses: ['DevOps и облачные технологии'],
      bio: 'Старший DevOps инженер в Ozon. Отвечает за инфраструктуру, которая обрабатывает миллионы заказов в день.',
      achievements: ['Сертификация Kubernetes', 'Автор корпоративных решений', 'Эксперт по cloud архитектуре']
    },
    {
      id: 5,
      name: 'София Волкова',
      role: 'Mobile Tech Lead',
      experience: '7 лет опыта',
      company: 'Avito',
      image: '/img/a8582a1b-4a7b-403f-8c54-d7273f766647.jpg',
      skills: ['React Native', 'Swift', 'Kotlin', 'Flutter'],
      students: 220,
      rating: 4.8,
      courses: ['Mobile разработка', 'React Native'],
      bio: 'Техлид мобильной разработки в Авито. Руководит командой из 15 разработчиков и отвечает за приложения с 50+ млн пользователей.',
      achievements: ['Google Developer Expert', 'Спикер мобильных конференций', 'Ментор женщин в IT']
    },
    {
      id: 6,
      name: 'Александр Новиков',
      role: 'Full Stack Architect',
      experience: '15 лет опыта',
      company: 'Kaspersky',
      image: '/img/ffae629a-5132-4436-a5c3-9d57bcb77f20.jpg',
      skills: ['JavaScript', 'Node.js', 'MongoDB', 'Redis'],
      students: 310,
      rating: 4.9,
      courses: ['Full Stack разработка', 'Backend архитектура'],
      bio: 'Ведущий архитектор в Kaspersky Lab. Проектирует системы информационной безопасности и обучает принципам создания надежных приложений.',
      achievements: ['Microsoft MVP', 'Автор технических книг', 'Консультант Fortune 500']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Наши преподаватели
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Эксперты из ведущих IT-компаний с многолетним опытом разработки и преподавания
            </p>
          </div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher) => (
              <Card key={teacher.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                      <img 
                        src={teacher.image} 
                        alt={teacher.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{teacher.name}</h3>
                    <p className="text-primary font-medium mb-1">{teacher.role}</p>
                    <p className="text-gray-600 text-sm">{teacher.company} • {teacher.experience}</p>
                    
                    <div className="flex items-center justify-center mt-2 space-x-4">
                      <div className="flex items-center">
                        <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                        <span className="text-sm font-medium ml-1">{teacher.rating}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Icon name="Users" size={16} className="mr-1" />
                        <span className="text-sm">{teacher.students} студентов</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">О преподавателе:</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {teacher.bio}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Навыки:</h4>
                      <div className="flex flex-wrap gap-1">
                        {teacher.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Курсы:</h4>
                      <div className="space-y-1">
                        {teacher.courses.map((course, index) => (
                          <div key={index} className="text-sm text-primary">
                            • {course}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Достижения:</h4>
                      <div className="space-y-1">
                        {teacher.achievements.map((achievement, index) => (
                          <div key={index} className="text-sm text-gray-600 flex items-start">
                            <Icon name="Check" size={12} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <Button className="w-full">
                        <Icon name="MessageCircle" size={16} className="mr-2" />
                        Записаться к преподавателю
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Наши показатели
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1,500+</div>
              <div className="text-gray-600">Выпускников</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4.8</div>
              <div className="text-gray-600">Средний рейтинг</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Briefcase" size={32} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600">Трудоустройство</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Лет опыта</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Хотите учиться у лучших?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/80">
            Запишитесь на демо-урок к любому из наших преподавателей
          </p>
          <Button size="lg" variant="secondary" className="px-8">
            Выбрать преподавателя
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

export default Teachers;