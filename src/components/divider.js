export default function Divider({ bgColor }) {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="animate-fill-line origin-left will-change-transform perspective-[1200px] w-full h-[1px] relative overflow-hidden rounded-[26px]"
    ></div>
  );
}
