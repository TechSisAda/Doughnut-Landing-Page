export default function Header(){

    return(
        <nav>
          <div className="w-[60%] mx-auto py-6">
              <ul className="flex gap-6 justify-evenly font-serif">
                <li>
                  <a href="#">Best Selling</a>
                </li>

                <li>
                  <a href="#">About Us</a>
                </li>

                <li className="font-bold">
                  <a href="#">YummyDonut</a>
                </li>

                <li>
                  <a href="#">Gallery</a>
                </li>

                <li>
                  <a href="#">Contact</a>
                </li>

              </ul>
            </div>
        </nav>
    )
}