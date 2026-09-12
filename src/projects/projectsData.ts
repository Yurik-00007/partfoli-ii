import todoImg from '../assets/img/todo-list.jpg'
import socialImg from '../assets/img/social-netwirk.jpg'
import instaImg from '../assets/img/insta-project.jpg'
import qrImg from '../assets/img/qr-project.svg'

export const projects = [
    {
        title: 'Social network',
        image: socialImg,
        href: 'https://yurik-00007.github.io/Samurai_way_all/#/',
        description: 'Мой самый первый веб-проект — полноценная социальная сеть. Реализовал базовый функционал общения: регистрацию пользователей, профили, систему друзей, ленту новостей и обмен сообщениями.',
    },
    {
        title: 'Todo list',
        image: todoImg,
        href: 'https://yurik-00007.github.io/20-todolist-Finish_D_RTK/',
        description: 'Удобная интерактивная записная книжка для управления повседневными задачами. Позволяет легко создавать, редактировать, удалять и отмечать выполненные дела, помогая организовывать рабочий день.',
    },
    {
        title: 'InstaProject',
        image: instaImg,
        href: 'http://momenttify.ru/',
        description: 'Аналог популярной социальной сети для обмена медиаконтентом. Проект с фокусом на работу с визуалом: публикация и кадрирование фотографий, лента постов, лайки, подписки и адаптивный интерфейс.',
    },
    {
        title: 'QR-Scanner-Generator',
        image: qrImg,
        href: 'https://yurik-00007.github.io/qr-code/',
        description: 'Инструмент для работы с QR-кодами, объединяющий генерацию новых кодов и сканирование существующих с помощью камеры устройства. Проект демонстрирует работу с аппаратными API и обработку данных в реальном времени.',
    },
]
