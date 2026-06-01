// nextjs import
import Image from "next/image";
import { useRouter } from "next/router";

export default function BlogsCard({ link }) {
  let router = useRouter();

  return (
    <div
      onClick={link ? () => router.push("/blogs-detail") : undefined}
      className="group relative w-full md:w-[calc(50%-5px)] lg:w-[calc(33.333%-7px)] aspect-[3/4] overflow-hidden rounded-[12px] cursor-pointer"
    >
      <Image
        src="/assets/people.avif"
        alt="blog-title"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute bottom-0 z-10 w-full p-[22px] bg-black/80 translate-y-0 opacity-100 md:translate-y-full md:opacity-0 md:transition-all md:duration-300 md:group-hover:translate-y-0 md:group-hover:opacity-100">
        <span className="text-white text-[12px] font-[500]">05-01-2026</span>

        <h2 className="text-white text-[24px] font-[600]">This is a title</h2>
      </div>
    </div>
  );
}
