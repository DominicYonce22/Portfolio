function CtaButton({ children, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 rounded-xl bg-[#2cd2dd] px-3 py-2 text-xs font-semibold text-black hover:bg-[#23a8b1] oldPhone:px-2 oldPhone:py-1 oldPhone:tracking-[.55px] android:px-3 android:text-sm md:text-lg"
    >
      {icon ? icon : ""}

      {children}
    </button>
  );
}

export default CtaButton;
