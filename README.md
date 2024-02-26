## Работа со сборкой

### Основные команды

npm run dev \ запуск проекта в режиме development
npm run build \ сборка проекта в режим production с минификацией, zip-архивацией
npm run create-components --name [название компонента] \ создает html, scss, js файлы с именем компонента в соотвествующих папках
npm run dev:clean \ удаление папки dev
npm run build:clean \ удаление папки build

### Структура сборки

base \ основные стили, при необходимости доп.скрипты
fonts \ шрифты
img \ изображения без сжатия
html, scss, js входные порты лежат в корне папки src
components является папкой для отдельных чанков, в ней лежат подпапки с названием чанка и его собственной структурой

### Общая информация

Форматирование через Prettier в режиме dev происходит автоматический. Сжатие фотографий, конвертация изображений в webp в scss/html и добавление тега picture в html происходит автоматический, достаточно указать тег img. Архивация prod версии в zip происходит автоматический. При создании новых компонентов scss подключается автоматический.