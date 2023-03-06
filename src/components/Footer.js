export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <p>Author: Hai Hoang</p>
      <p>© {currentYear} AznRaven's Api</p>
    </>
  );
}
