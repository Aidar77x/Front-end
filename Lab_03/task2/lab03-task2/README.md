# Lab 03 — Task 2 (Lab 3.2)

## Жобаны іске қосу
1) cd lab03-task2
2) npm install
3) npm run dev
4) http://localhost:5173/

## Тапсырма мазмұны
Бұл тапсырмада `useEffect` арқылы API-ден user дерегі жүктеледі:
- State: `user`, `loading`, `error`
- `useEffect` компонент mount болғанда және `userId` өзгергенде fetch жасайды (dependency array: `[userId]`)
- Cleanup кезінде `AbortController` арқылы fetch тоқтатылады (unmount немесе userId ауысқанда)
- `Refresh` батырмасы random userId (1–10) арқылы деректі қайта жүктейді
- Parent компонент (`UserApp`) `userId` state ұстайды және батырмалар арқылы userId ауыстырады

## API
- https://jsonplaceholder.typicode.com/users/{id}

## Құрылым
- src/components/UserProfile.jsx
- src/components/UserApp.jsx
- src/App.jsx