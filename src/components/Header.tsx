import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="GraduationCap" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-gray-900">TechSchool</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
            >
              Главная
            </Link>
            <Link 
              to="/courses" 
              className={`transition-colors ${isActive('/courses') ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
            >
              Курсы
            </Link>
            <Link 
              to="/teachers" 
              className={`transition-colors ${isActive('/teachers') ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
            >
              Преподаватели
            </Link>
          </nav>

          <Button>
            Записаться на демо-урок
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;