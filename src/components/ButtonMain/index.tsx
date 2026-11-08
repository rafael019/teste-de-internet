interface ButtonMainProps {
  textButton: string;
}
export function ButtonMain({ textButton }: ButtonMainProps) {
  return (
    <button type="submit" className="bg-orange-500 py-2 px-8 text-white text-center font-semibold uppercase text-sm w-full transition-all hover:bg-stone-950 cursor-pointer">
      {textButton}
    </button>
  );
}
