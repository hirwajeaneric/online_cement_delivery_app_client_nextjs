import Link from "next/link"
import { MdOutlineShoppingCart } from "react-icons/md";

const NavigationBar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-3">
        <div className="navigation_bar flex justify-between m-auto">
            <Link href={"/"}>CementEase</Link>
            <div className="flex justify-between items-center">
                <Link href={"/"}>Home</Link>
                <Link href={"/products"}>Order Now</Link>
                <Link href={"/account"}>My Account</Link>
                <Link href={"/cart"}><MdOutlineShoppingCart /></Link>
            </div>
        </div>
    </nav>
  )
}

export default NavigationBar