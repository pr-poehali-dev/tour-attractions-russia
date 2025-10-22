import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const tours = [
    {
      id: 1,
      city: 'Москва',
      title: 'Златоглавая столица',
      image: 'https://cdn.poehali.dev/projects/627bb53e-7cdc-477d-967a-4bf66668311c/files/48aeb251-d9e4-424e-8ef4-503e85dcb98c.jpg',
      price: '25 000 ₽',
      duration: '3 дня',
      description: 'Красная площадь, Кремль, Храм Василия Блаженного'
    },
    {
      id: 2,
      city: 'Санкт-Петербург',
      title: 'Северная столица',
      image: 'https://cdn.poehali.dev/projects/627bb53e-7cdc-477d-967a-4bf66668311c/files/b92feb41-4caa-4628-8278-35c12563ed80.jpg',
      price: '30 000 ₽',
      duration: '4 дня',
      description: 'Эрмитаж, Петергоф, Исаакиевский собор'
    },
    {
      id: 3,
      city: 'Байкал',
      title: 'Жемчужина Сибири',
      image: 'https://cdn.poehali.dev/projects/627bb53e-7cdc-477d-967a-4bf66668311c/files/4d1b0680-165b-4cb3-91b7-ec5884d104b3.jpg',
      price: '45 000 ₽',
      duration: '7 дней',
      description: 'Самое глубокое озеро мира, природные заповедники'
    },
    {
      id: 4,
      city: 'Казань',
      title: 'Столица Татарстана',
      image: 'https://cdn.poehali.dev/projects/627bb53e-7cdc-477d-967a-4bf66668311c/files/48aeb251-d9e4-424e-8ef4-503e85dcb98c.jpg',
      price: '20 000 ₽',
      duration: '2 дня',
      description: 'Кремль, Мечеть Кул-Шариф, национальная кухня'
    },
    {
      id: 5,
      city: 'Сочи',
      title: 'Курорт на море',
      image: 'https://cdn.poehali.dev/projects/627bb53e-7cdc-477d-967a-4bf66668311c/files/4d1b0680-165b-4cb3-91b7-ec5884d104b3.jpg',
      price: '35 000 ₽',
      duration: '5 дней',
      description: 'Олимпийский парк, Красная поляна, пляжи'
    },
    {
      id: 6,
      city: 'Владивосток',
      title: 'Ворота на Восток',
      image: 'https://cdn.poehali.dev/projects/627bb53e-7cdc-477d-967a-4bf66668311c/files/b92feb41-4caa-4628-8278-35c12563ed80.jpg',
      price: '40 000 ₽',
      duration: '4 дня',
      description: 'Русский мост, бухта Золотой Рог, морские пейзажи'
    }
  ];

  const hotTour = {
    city: 'Москва + Санкт-Петербург',
    title: 'Две столицы по супер цене!',
    image: 'https://cdn.poehali.dev/projects/627bb53e-7cdc-477d-967a-4bf66668311c/files/48aeb251-d9e4-424e-8ef4-503e85dcb98c.jpg',
    oldPrice: '60 000 ₽',
    newPrice: '42 000 ₽',
    duration: '7 дней',
    discount: '30%',
    endDate: '2025-11-01',
    description: 'Посетите главные достопримечательности двух столиц России! В тур включены: проживание в 4* отелях, трансфер, экскурсии по Кремлю, Эрмитажу, Петергофу. Скидка действует только до конца месяца!'
  };

  const reviews = [
    {
      id: 1,
      name: 'Анна Петрова',
      city: 'Екатеринбург',
      rating: 5,
      text: 'Потрясающая поездка в Санкт-Петербург! Всё организовано на высшем уровне, гиды профессиональные.',
      date: '15.10.2025'
    },
    {
      id: 2,
      name: 'Дмитрий Соколов',
      city: 'Новосибирск',
      rating: 5,
      text: 'Байкал - это нечто! Спасибо за незабываемые впечатления и идеальный маршрут.',
      date: '08.10.2025'
    },
    {
      id: 3,
      name: 'Елена Морозова',
      city: 'Краснодар',
      rating: 4,
      text: 'Отличный тур по Москве. Немного не хватило свободного времени, но в целом всё супер!',
      date: '22.09.2025'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Map" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary">Достопримечательности России</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary transition-colors font-medium">
                Главная
              </button>
              <button onClick={() => scrollToSection('tours')} className="text-gray-700 hover:text-primary transition-colors font-medium">
                Все туры
              </button>
              <button onClick={() => scrollToSection('hot')} className="text-gray-700 hover:text-primary transition-colors font-medium">
                Горящий тур
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-primary transition-colors font-medium">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('booking')} className="text-gray-700 hover:text-primary transition-colors font-medium">
                Форма заявки
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-gray-700 hover:text-primary transition-colors font-medium">
                Контакты
              </button>
            </nav>
            <Button className="hidden md:block">
              <Icon name="Phone" size={18} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 text-lg px-4 py-2">🇷🇺 Путешествуй по России</Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Откройте красоту России
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              От златоглавой Москвы до прозрачных вод Байкала. Лучшие туры по самым живописным местам нашей страны
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('tours')} className="text-lg px-8">
                <Icon name="Compass" size={20} className="mr-2" />
                Выбрать тур
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('hot')} className="text-lg px-8">
                <Icon name="Flame" size={20} className="mr-2" />
                Горящие предложения
              </Button>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="MapPin" size={48} className="mx-auto text-primary mb-2" />
                <CardTitle>50+ городов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Маршруты по всей России от Калининграда до Владивостока</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Users" size={48} className="mx-auto text-primary mb-2" />
                <CardTitle>10 000+ туристов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Довольных клиентов, которые рекомендуют нас друзьям</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Award" size={48} className="mx-auto text-primary mb-2" />
                <CardTitle>15 лет опыта</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Профессиональная организация туров с 2010 года</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="tours" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Популярные направления</h2>
            <p className="text-gray-600 text-lg">Выберите город и отправляйтесь в незабываемое путешествие</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img src={tour.image} alt={tour.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  <Badge className="absolute top-4 right-4 bg-white/90 text-primary border-primary">
                    <Icon name="MapPin" size={14} className="mr-1" />
                    {tour.city}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{tour.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-2">
                    <Icon name="Clock" size={16} />
                    {tour.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{tour.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{tour.price}</span>
                  <Button>Подробнее</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="hot" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-destructive text-white text-lg px-4 py-2">
              <Icon name="Flame" size={20} className="mr-2" />
              Горящее предложение
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Специальная акция</h2>
            <p className="text-gray-600 text-lg">Успейте забронировать со скидкой до конца месяца!</p>
          </div>

          <Card className="max-w-4xl mx-auto overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img src={hotTour.image} alt={hotTour.title} className="w-full h-full object-cover" />
                <Badge className="absolute top-4 left-4 bg-destructive text-white text-lg px-4 py-2">
                  -{hotTour.discount}
                </Badge>
              </div>
              <div className="p-8">
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Icon name="MapPin" size={20} />
                    <span>{hotTour.city}</span>
                  </div>
                  <CardTitle className="text-3xl mb-4">{hotTour.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mb-6">
                  <p className="text-gray-600 mb-4">{hotTour.description}</p>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Icon name="Clock" size={20} />
                    <span>{hotTour.duration}</span>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl font-bold text-destructive">{hotTour.newPrice}</span>
                    <span className="text-xl text-gray-400 line-through">{hotTour.oldPrice}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Icon name="Calendar" size={16} />
                    <span>Акция до {new Date(hotTour.endDate).toLocaleDateString('ru-RU')}</span>
                  </div>
                </CardContent>
                <Button size="lg" className="w-full bg-destructive hover:bg-destructive/90">
                  <Icon name="Ticket" size={20} className="mr-2" />
                  Забронировать сейчас
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы наших туристов</h2>
            <p className="text-gray-600 text-lg">Реальные впечатления от путешествий</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review) => (
              <Card key={review.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription className="text-sm">{review.city}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">{review.text}</p>
                  <p className="text-sm text-gray-400">{review.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Форма заявки на бронирование</h2>
              <p className="text-gray-600 text-lg">Оставьте заявку, и мы свяжемся с вами в течение 30 минут</p>
            </div>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Забронировать тур</CardTitle>
                <CardDescription>Заполните форму и наш менеджер подберет лучший вариант</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя *</Label>
                      <Input id="name" placeholder="Иван Иванов" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="ivan@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city">Город отправления *</Label>
                    <Input id="city" placeholder="Москва" required />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="destination">Направление *</Label>
                      <select id="destination" className="w-full px-3 py-2 border border-gray-300 rounded-md" required>
                        <option value="">Выберите город</option>
                        <option value="moscow">Москва</option>
                        <option value="spb">Санкт-Петербург</option>
                        <option value="baikal">Байкал</option>
                        <option value="kazan">Казань</option>
                        <option value="sochi">Сочи</option>
                        <option value="vladivostok">Владивосток</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="travelers">Количество человек *</Label>
                      <Input id="travelers" type="number" min="1" defaultValue="2" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dates">Желаемые даты</Label>
                    <Input id="dates" type="date" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea id="message" placeholder="Дополнительные пожелания к туру..." rows={4} />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-gray-600 text-lg">Мы всегда на связи</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Building2" size={24} className="text-primary" />
                  Наш офис
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Адрес:</p>
                    <p className="text-gray-600">г. Москва, ул. Тверская, д. 15, офис 301</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Телефон:</p>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                    <p className="text-gray-600">+7 (800) 555-35-35 (бесплатно)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Email:</p>
                    <p className="text-gray-600">info@russia-tours.ru</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Режим работы:</p>
                    <p className="text-gray-600">Пн-Пт: 9:00 - 20:00</p>
                    <p className="text-gray-600">Сб-Вс: 10:00 - 18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Map" size={24} className="text-primary" />
                  Карта проезда
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-[300px] bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="MapPin" size={48} className="mx-auto text-primary mb-2" />
                    <p className="text-gray-600">Карта офиса</p>
                    <p className="text-sm text-gray-500">Москва, ул. Тверская, 15</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Map" size={32} className="text-primary" />
                <h3 className="text-xl font-bold">Достопримечательности России</h3>
              </div>
              <p className="text-gray-400">Путешествуйте по России с комфортом и удовольствием</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Быстрые ссылки</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Главная</button></li>
                <li><button onClick={() => scrollToSection('tours')} className="hover:text-white transition-colors">Все туры</button></li>
                <li><button onClick={() => scrollToSection('hot')} className="hover:text-white transition-colors">Горящий тур</button></li>
                <li><button onClick={() => scrollToSection('reviews')} className="hover:text-white transition-colors">Отзывы</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Направления</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Москва</li>
                <li className="hover:text-white transition-colors cursor-pointer">Санкт-Петербург</li>
                <li className="hover:text-white transition-colors cursor-pointer">Байкал</li>
                <li className="hover:text-white transition-colors cursor-pointer">Казань</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@russia-tours.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, Тверская, 15
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Достопримечательности России. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
