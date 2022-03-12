function Footer() {
  return (
    <footer className="footer-copyright">
      <div className="container">
        <span>© {new Date().getFullYear()} Victor Listapad</span>
        <a
          className="right git-link"
          target="_blank"
          href="https://github.com/VictorListapad"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}

export { Footer };
