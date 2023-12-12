export const wizardData = [
    {
        id: 1, type: "item", name: "Общие данные", num : 1,
        childrens: [
            { id: 2, type: "subitem", name: "Ввод общих данных"},
        ]
    },
    {
        id: 3, type: "item", name: "Параметры", num: 2,
        childrens: [
            { id: 4, type: "subitem", name: "Ввод параметров"},
        ]
    },
    {
        id: 5, type: "item", name: "Процентные ставки", num: 3,
        childrens: [
            { id: 6, type: "subitem", name: "Ввод процентных ставок"},

        ]
    },
    {
        id: 7, type: "item", name: "Расчетные категории", num: 4,
        childrens: [
            { id: 8, type: "subitem", name: "Ввод расчетных категорий"},

        ]
    },
    {
        id: 9, type: "item", name: "Сценарии", num: 5,
        childrens: [
            { id: 10, type: "subitem", name: "Исполнение пункта графика"},
            { id: 11, type: "subitem", name: "Распределение изменения суммы процентов"},
            { id: 12, type: "subitem", name: "Пересчет суммы вознаграждения"},
            { id: 13, type: "subitem", name: "Предоставление кредита"},
            { id: 14, type: "subitem", name: "Расчет графика кредита с равномерным погашением"},
            { id: 15, type: "subitem", name: "Начисление вознаграждения"},
            { id: 16, type: "subitem", name: "Расчет суммы комиссии и суммы выдачи кредита"},
            { id: 17, type: "subitem", name: "Выполнение расчета по запросу"},
            { id: 18, type: "subitem", name: "Подготовка сумм требований к выставлению"},

        ]
    },
    {
        id: 20, type: "item", name: "События", num: 6, last: true,
        childrens: [
            { id: 21, type: "subitem", name: "Ввод событий"},

        ]
    },
 

]