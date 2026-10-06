import Image from "next/image";

type Props = {
  className?: string;
  priority?: boolean;
};

export default function Logo({ className = "", priority }: Props) {
  return (
    <span className={`brand-logo ${className}`.trim()}>
      <Image
        src="/logo.png"
        alt="Aislamientos Chairi — Pladur, aislamiento y reformas en Ceuta"
        fill
        priority={priority}
        sizes="(max-width: 700px) 48px, 72px"
      />
    </span>
  );
}
