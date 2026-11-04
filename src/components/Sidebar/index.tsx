interface SidebarProps {
  sidebarTitle: string;
  sidebarContent: string;
}

export function Sidebar({ sidebarTitle, sidebarContent }: SidebarProps) {
  return (
    <div className="bg-white p-4 border border-gray-200 mb-9">
      <h2 className="text-lg font-bold mt-0 mb-2 text-stone-800">{sidebarTitle}</h2>
      <p className="text-gray-500">{sidebarContent}</p>
    </div>
  );
}
