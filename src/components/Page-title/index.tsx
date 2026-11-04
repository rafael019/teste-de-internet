interface PageTitleProps {
  primaryTitle: string;
}
export function PageTitle({ primaryTitle }: PageTitleProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-stone-800 mb-8">{primaryTitle}</h1>
    </div>
  );
}
