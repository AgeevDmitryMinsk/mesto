export default class Section{
    //Первым параметром конструктора принимает объект с двумя свойствами: items и renderer.
    // Свойство items — это массив данных, которые нужно добавить на страницу при инициализации класса.
    // Свойство renderer — это функция, которая отвечает за создание и отрисовку данных на странице.
    // Второй параметр конструктора — селектор контейнера, в который нужно добавлять созданные элементы.
    constructor({ items, renderer }, container) {
        this._renderedItems = items;
        this._renderer = renderer;

        this._container = container;
    }

    //Содержит публичный метод, который отвечает за отрисовку всех элементов.
    // Отрисовка каждого отдельного элемента должна осуществляться функцией renderer.
    renderItems() {
        this._renderedItems.forEach(item => this._renderer(item))
    }

    addItem(element, toEnd) {
        const method = toEnd ? 'append' : 'prepend';
        this._container[method](element);
    }
}