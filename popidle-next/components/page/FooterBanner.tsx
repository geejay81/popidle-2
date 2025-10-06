// components/FooterBanner.tsx

import Link from "next/link";
import Image from "next/image";

export default function FooterBanner() {
  return (
    <div className="fixed bottom-0 left-0 w-full shadow-lg flex justify-center z-50">
      <Link
        href="http://www.amazon.co.uk/tryprimefree?tag=webarific03-21"
        target="_blank"
        rel="noopener noreferrer"
        className=""
      >
        <Image
          src="/promos/amazon/UK06_PBDD25_DO_468x60.png"
          alt="Amazon Banner Ad"
          width={460}
          height={60}
          className="mx-auto"
        />
      </Link>
    </div>
  );
}
