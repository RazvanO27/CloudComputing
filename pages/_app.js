import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <header style={{ 
        backgroundColor: "#f0f0f0", 
        padding: "20px", 
        textAlign: "center", 
        borderBottom: "2px solid #0070f3" 
      }}>
        <h1 style={{ 
          margin: 0, 
          color: "#0070f3", 
          fontSize: "2rem" 
        }}>
          Gym Notes
        </h1>
      </header>

      <main style={{ padding: "20px" }}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;

