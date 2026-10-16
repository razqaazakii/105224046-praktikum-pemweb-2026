interface SiteFooterProps {
  namaProduk: string;
}

export default function SiteFooter({ namaProduk }: SiteFooterProps) {
  return (
    <footer className="border-t p-4 text-center text-sm text-gray-600">
      <p>© 2026 {namaProduk}</p>
    </footer>
  );
}
