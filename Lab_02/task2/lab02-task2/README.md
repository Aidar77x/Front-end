# Lab 02 — Task 2 (Lab 2.2)
1) Папкаға кіріңіз:
   - `cd lab02-task2`
2) Тәуелділіктерді орнатыңыз:
   - `npm install`
3) Жобаны іске қосыңыз:
   - `npm run dev`
4) Браузерде терминалда шыққан local URL-ды ашыңыз (әдетте `http://localhost:5173/`).

## Тапсырма мазмұны
Бұл тапсырмада React-та:
- Custom компоненттер жасау (Card, ProductList, Section)
- `props` және `children` қолдану
- `.map()` арқылы тізім шығару және `key` беру
- Section компонентінде Fragment қолдану (артық wrapper жоқ)

## Компоненттер
- `src/components/Card.jsx`
  - `title` props қабылдайды
  - `children` арқылы ішкі контентті көрсетеді
  - `className` optional параметрі бар

- `src/components/ProductList.jsx`
  - `products` массивін `.map()` арқылы Card-тарға шығарады
  - `key={product.id}` қолданылады
  - Баға JSX ішінде көрсетіледі (`Price: {price}`)

- `src/components/Section.jsx`
  - `title` және `children` қабылдайды
  - Fragment (`<>...</>`) арқылы тақырып пен контентті шығарады

## Нәтиже
Экранда 2 Card (About, Info) және Products бөлімінде 3 өнім карточкасы көрсетіледі.