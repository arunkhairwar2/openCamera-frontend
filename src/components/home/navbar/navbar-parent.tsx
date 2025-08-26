import { MdOutlineAccountCircle } from "react-icons/md";

function NavbarParent() {
  return (
    <div className="h-20 bg-[#002322] flex text-white justify-between items-center px-4">
      <span className="text-white text-4xl">Arun</span>
      <div>dropdown</div>
      <div className="flex gap-2 items-center">
        <MdOutlineAccountCircle size={30} />
        <span className="text-xl font-semibold">Log In</span>
      </div>
    </div>
  );
}

export default NavbarParent;
