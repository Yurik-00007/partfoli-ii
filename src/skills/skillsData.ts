import icon1 from "../assets/img/icon_3.svg";
import icon2 from "../assets/img/icon_2.svg";
import icon3 from "../assets/img/icon_1.svg";

export const skillsIntro = 'Стек и процессы, с которыми работал в команде: интерфейсы на React и Next.js, передача данных через REST, GraphQL и WebSocket, работа по Scrum от задачи в Jira до код-ревью, CI/CD и деплоя.'

export const skills = [
    {
        title: 'Frontend Development',
        icon: icon1,
        items: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3/SCSS', 'Tailwind'],
    },
    {
        title: 'State & Data',
        icon: icon2,
        items: ['Redux Toolkit', 'RTK Query', 'Context API', 'REST API', 'GraphQL', 'WebSocket'],
    },
    {
        title: 'Tools & Workflow',
        icon: icon3,
        items: ['Git', 'GitHub', 'Webstorm/VS Code', 'Jira', 'Scrum', 'CI/CD (Vercel)', 'Figma'],
    },
]
