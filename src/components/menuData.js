export const menuData = [

    {
        id: 1, type: "folder", name: "Кредиты",
        childrens: [
            { id: 2, type: "link", name: "Кредит", href: "/" },
            { id: 3, type: "link", name: "Список кредитов", href: "/home" }
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
                            { id: 8, type: "link", name: "Реестр приложений", href: "/", marked: true },
                            { id: 9, type: "link", name: "Отчеты", href: "/", marked: true },
                            { id: 10, type: "link", name: "Выписки", href: "/" }
                        ]
                    },
                    { id: 11, type: "folder", name: "Отдел сопровождения сделок", childrens: [
                        { id: 12, type: "link", name: "Сопровождение", href: "/" }
                    ] },
                    { id: 13, type: "folder", name: "Отдел безопасности", childrens: [
                        { id: 14, type: "link", name: "Безопасность", href: "/" }
                    ] },
                ]
            },

        ]
    },
    {
        id: 15, type: "folder", name: "Карточные продукты",
        childrens: [
            { id: 16, type: "link", name: "Выписки", href: "/" }
        ]
    },


]


