export default function Footer() {
    return (
      <footer style={styles.footer}>
        <p>Dog Image Generator &copy; {new Date().getFullYear()}</p>
        <p>
          Images sourced from <a href="https://dog.ceo/dog-api/">Dog CEO API</a>
        </p>
      </footer>
    );
  }
  
  const styles = {
    footer: {
      textAlign: "center",
      padding: "20px",
      marginTop: "40px",
      borderTop: "1px solid #ddd",
      color: "#666",
      fontSize: "14px",
    },
  };
  