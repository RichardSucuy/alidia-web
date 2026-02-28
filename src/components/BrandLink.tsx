import Link from "next/link";

interface BrandLinkProps {
  children?: React.ReactNode;
}

export default function BrandLink({ children = "ALIDIA" }: BrandLinkProps) {
  return (
    <Link
      href="/"
      className="text-[#0c3c5c] hover:opacity-80 transition-opacity"
    >
      {children}
    </Link>
  );
}