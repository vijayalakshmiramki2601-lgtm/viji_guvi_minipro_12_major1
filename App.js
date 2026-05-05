import React, { useEffect, useState } from "react";
import API from "./services/api";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [selectedBook, setSelectedBook] = useState(null);
  const [email, setEmail] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [search, setSearch] = useState("");
  const [wishlist, setWishlist] = useState([]);

  const user = localStorage.getItem("user");

  // ✅ FETCH BOOKS
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await API.get("/");
        setBooks(res.data);
      } catch (err) {
        console.log("Fetch error");
      }
    };
    fetchBooks();

    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(saved);
  }, []);

  // ❤️ WISHLIST
  const toggleWishlist = (book) => {
    let updated;
    if (wishlist.find((b) => b._id === book._id)) {
      updated = wishlist.filter((b) => b._id !== book._id);
    } else {
      updated = [...wishlist, book];
    }
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  // 🔐 LOGIN
  const handleLogin = () => {
    if (!email) return alert("Enter email 😭");
    localStorage.setItem("user", email);
    window.location.reload();
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  // 📊 FILTER LOGIC
  let filteredBooks = books.filter((b) => {
    if (filter === "Top") return b.rating >= 4.7;
    if (filter === "Trending") return b.rating >= 4.5;
    if (filter === "Wishlist") return wishlist.some(w => w._id === b._id);
    if (filter === "All") return true;
    return b.genre === filter;
  });

  // 🔍 SEARCH
  filteredBooks = filteredBooks.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  // 📊 COUNTS
  const total = books.length;
  const top = books.filter((b) => b.rating >= 4.7).length;
  const trending = books.filter((b) => b.rating >= 4.5).length;

  const romantic = books.filter(b => b.genre === "Romantic").length;
  const comedy = books.filter(b => b.genre === "Comedy").length;
  const timeTravel = books.filter(b => b.genre === "Time Travel").length;

  // 🔐 LOGIN PAGE
  if (!user) {
    return (
      <div className="login-page">
        <h1>📚 BookVerse</h1>

        {!showLogin ? (
          <button onClick={() => setShowLogin(true)}>Login</button>
        ) : (
          <>
            <input
              type="email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleLogin}>Continue</button>
          </>
        )}
      </div>
    );
  }

  // 📖 BOOK DETAIL PAGE
  if (selectedBook) {
    return (
      <div className="main" style={{ padding: "40px" }}>
        <button onClick={() => setSelectedBook(null)}>⬅ Back</button>

        <h1>{selectedBook.title}</h1>

        <img
          src={selectedBook.image}
          alt={selectedBook.title}
          style={{
            width: "250px",
            height: "350px",
            objectFit: "cover",
            borderRadius: "10px",
            marginBottom: "20px"
          }}
        />

        <p><b>Author:</b> {selectedBook.author}</p>
        <p><b>Genre:</b> {selectedBook.genre}</p>
        <p><b>Rating:</b> ⭐ {selectedBook.rating}</p>
        <p><b>Price:</b> ₹{selectedBook.price}</p>

        <h3>📖 Story Overview</h3>
        <p style={{ maxWidth: "600px", lineHeight: "1.6" }}>
          {selectedBook.overview
            ? selectedBook.overview
            : "No story available 😅"}
        </p>
      </div>
    );
  }

  return (
    <div className="layout">

      {/* SIDEBAR */}
      <div className="sidebar">
        <h2>📚 BookVerse</h2>

        <ul>
          <li onClick={() => setFilter("All")}>🏠 All ({total})</li>
          <li onClick={() => setFilter("Romantic")}>❤️ Romantic ({romantic})</li>
          <li onClick={() => setFilter("Comedy")}>😂 Comedy ({comedy})</li>
          <li onClick={() => setFilter("Time Travel")}>⏳ Time Travel ({timeTravel})</li>
          <li onClick={() => setFilter("Top")}>⭐ Top ({top})</li>
          <li onClick={() => setFilter("Trending")}>🔥 Trending ({trending})</li>
          <li onClick={() => setFilter("Wishlist")}>💖 Wishlist ({wishlist.length})</li>
        </ul>
      </div>

      {/* MAIN */}
      <div className="main">

        {/* HEADER */}
        <div className="header">
          <h1>Explore Books 📖</h1>

          <div>
            <span style={{ marginRight: "15px" }}>👤 {user}</span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout 🚪
            </button>
          </div>
        </div>

        {/* SEARCH */}
        <input
          className="search"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* COUNT */}
        <p style={{ fontWeight: "bold", margin: "10px 0" }}>
          📚 {filteredBooks.length} Books Available
        </p>

        {/* EMPTY */}
        {filteredBooks.length === 0 && (
          <p>No books found 😢</p>
        )}

        {/* BOOK GRID */}
        <div className="container">
          {filteredBooks.map((b) => (
            <div
              className="card"
              key={b._id}
              onClick={() => setSelectedBook(b)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={b.image}
                alt={b.title}
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                  borderRadius: "10px"
                }}
              />

              <h3>{b.title}</h3>
              <p className="tagline">{b.tagline || "Good read 📚"}</p>
              <p>{b.author}</p>
              <p>{b.genre}</p>
              <p>⭐ {b.rating}</p>
              <p className="price">₹{b.price}</p>

              {/* ❤️ WISHLIST */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleWishlist(b);
                }}
              >
                {wishlist.find((w) => w._id === b._id)
                  ? "❤️ Added"
                  : "🤍 Add"}
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;