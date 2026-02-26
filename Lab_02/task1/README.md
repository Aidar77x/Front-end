# Lab 02 — Task 1 (Lab 2.1)
1) Терминалда осы папкаға кіріңіз:
   - `cd lab02-task1`
2) Тәуелділіктерді орнатыңыз:
   - `npm install`
3) Жобаны іске қосыңыз:
   - `npm run dev`
4) Браузерде терминалда шыққан local URL-ды ашыңыз (әдетте `http://localhost:5173/`).

## Тапсырма мазмұны
Бұл тапсырмада React-та:
- **Fragment** қолдану (артық wrapper `<div>` қоспай бірнеше элементті бірге қайтару)
- `.map()` арқылы **тізім (list) шығару**
- Әр элементке **`key` беру** талаптары орындалды

## Компоненттер
- `src/components/FragmentLayout.jsx`
  - `header`, `main`, `footer` элементтерін **Fragment (`<>...</>`)** арқылы қайтарады.
  - Артық wrapper контейнер қолданылмайды.

- `src/components/ItemList.jsx`
  - `items` массивін `.map()` арқылы `<li>` элементтерге айналдырады.
  - Әр `<li>` үшін `key={item.id}` қолданылады.

- `src/components/CombinedFragmentList.jsx`
  - Fragment ішінде тақырып (`h2`), тізім (`ul`) және қорытынды мәтін көрсетіледі.
  - Қорытынды: `Total: {items.length} items`

## Тексеру
- DevTools-та DOM құрылымын қарап, `header/main/footer` арасында артық wrapper `<div>` жоқ екеніне көз жеткізуге болады.
- Console-та `key` туралы warning шықпауы керек.