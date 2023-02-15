# Задание

Описание
Требуется реализовать систему комментариев.
Каждый комментарий состоит из следующих элементов:
Аватар автора комментария
Имя автора комментария
Текст комментария
Дата написания комментария
Кнопки рейтинга "+" и "-"
Текущий рейтинг комментария.
Нажатие на "+" или "-" изменяют рейтинг комментария на 1. Если рейтинг комментария становится менее "-10", комментарий должен свернуться в одной строчку "Открыть комментарий".
Дата комментария должна быть записана в виде временного интервала, прошедшего с момента написания комментария. Шаг интервала: от 0 до 1 часа - минуты, от 1 часа до 1 суток - часы, от 1 суток - дни.
Комментарии должны добавляться без перезагрузки страницы.
Форма отправки комментария должна иметь минимальную валидацию на отсутствие значений и на правильность формата почты.
Требования
Для реализации логики следует использовать фреймворк React.js
Для верстки рекомендуем использовать библиотеку Material-UI
Выполненное задание должно располагаться на github.com.
В репозитории должна быть история коммитов (то есть запрещается выкладывать уже готовый проект).
По желанию соискателя готовое задание может быть выложено на github pages.
Плюсом будет наличие комментариев в формате JSDoc.
Будет плюсом использование styled-components для стилизации

# Использование

## Установите зависимости

```
npm install
# or
yarn
```

## Для сборки скрипта и его запуска введите

```
npm run build
# or
yarn build
```

# Для разработки или оценки результата [живой странице](http://localhost:3000/) введите

```
npm start
# or
yarn start
```
