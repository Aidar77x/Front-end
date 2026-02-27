# Lab 04 — Task 2 (Articles Refactor)

## Жобаны іске қосу
1) cd lab04-task2
2) npm install
3) npm run dev
4) http://localhost:5173/

## Тапсырма мақсаты
Бір файлдағы ArticleManager кодын компоненттерге бөліп (refactor) жасау:
- AddArticle — жаңа мақала қосу формасы
- ArticleList — мақалалар тізімі (map + key)
- ArticleItem — бір мақала, ішінде local state `isOpened` арқылы Read/Hide

## Компоненттер
- src/components/ArticleManager.jsx — articles state сақтайды, onAdd арқылы жаңа мақала қосады
- src/components/AddArticle.jsx — title/content input, submit кезінде parent-ке new article жібереді
- src/components/ArticleList.jsx — articles массивін картаға түсіреді
- src/components/ArticleItem.jsx — Read/Hide батырмасы арқылы контентті ашып/жабады