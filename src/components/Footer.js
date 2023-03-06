export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <p>Author: Hai Hoang</p>
      <p>© {currentYear} AznRaven's Api</p>
    </div>
  );
}
