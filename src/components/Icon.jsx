function Icon({ children }) {
  return (
    <span className="oldPhone:text-xs android:text-sm flex sm:text-lg lg:text-[32px]">
      {children}
    </span>
  );
}

export default Icon;
