export default function BlogsDetail() {
  return (
    <div className="w-full bg-gradient-to-b from-[#e1e6ed] to-[#f5f7fa] text-[#111]">
      <div className="flex flex-col gap-[32px] lg:gap-[40px] xl:gap-[100px] h-min px-[20px] lg:px-[40px] xl:px-[100px] pt-[40px] lg:pt-[92px] xl:pt-[92px] pb-[60px] lg:pb-[92px] xl:pb-[92px]  max-w-[1440px] mx-auto">
        <h1 className="text-[36px] lg:text-[60px] xl:text-[64px]">
          This is the blog title
        </h1>
        <div>
          {/* blogs detail */}
          <div></div>

          {/* related blogs */}
          <div className="flex flex-col gap-[20px]">
            <h2>Related Blogs</h2>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
