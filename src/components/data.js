export const menuData = [

    {
        id: 1, type: "folder", name: "Кредиты",
        childrens: [
            { id: 2, type: "link", name: "Простой кредит", href: "/" },
            { id: 3, type: "link", name: "Автокредит", href: "/" }
        ]
    },
    {
        id: 4, type: "folder", name: "Согласования договоров",
        childrens: [
            {
                id: 5, type: "folder", name: "Согласования договоров", childrens: [
                    {
                        id: 6, type: "folder", name: "Отдел юридических вопросов", childrens: [
                            { id: 7, type: "link", name: "Реестр договоров", href: "/" },
                            { id: 8, type: "link", name: "Реестр приложений", href: "/" },
                            { id: 9, type: "link", name: "Отчеты", href: "/" },
                            { id: 10, type: "link", name: "Выписки", href: "/" }
                        ]
                    },
                    { id: 11, type: "folder", name: "Отдел сопровождения сделок", childrens: [] },
                    { id: 12, type: "folder", name: "Отдел безопасности", childrens: [] },
                ]
            },

        ]
    },
    {
        id: 13, type: "folder", name: "Карточные продукты",
        childrens: [
            { type: "link", name: "Выписки", href: "/" }
        ]
    },


]


