import { useEffect, useRef, useState } from "react";

export default function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const abortRef = useRef(null);

  const fetchUser = async (id) => {
    if (abortRef.current) {
      abortRef.current.abort();
    }

    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        signal: controller.signal,
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      const data = await res.json();
      setUser(data);
      setLoading(false);
    } catch (e) {
      if (e.name === "AbortError") return;
      setError(e.message || "Unknown error");
      setLoading(false);
    }
  };

  useEffect(() => {
    // userId dependency: userId өзгерсе, жаңа user жүктеледі
    fetchUser(userId);

    // cleanup: компонент unmount болса немесе userId ауысса, fetch тоқтатылады
    return () => {
      if (abortRef.current) abortRef.current.abort();
    };
  }, [userId]);

  const handleRefresh = () => {
    const randomId = Math.floor(Math.random() * 10) + 1; // 1..10
    fetchUser(randomId);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: 12, borderRadius: 8 }}>
      <h3>User Profile</h3>

      <button onClick={handleRefresh}>Refresh (random 1–10)</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "crimson" }}>Error: {error}</p>}

      {user && (
        <div style={{ marginTop: 10 }}>
          <p>
            <b>Name:</b> {user.name}
          </p>
          <p>
            <b>Email:</b> {user.email}
          </p>
          <p>
            <b>Phone:</b> {user.phone}
          </p>
          <p>
            <b>Website:</b> {user.website}
          </p>
        </div>
      )}
    </div>
  );
}