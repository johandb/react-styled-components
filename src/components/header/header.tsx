import { Image } from "../../styled/image/styled.image";
import Menubar from "../menubar/menubar";

export const Header = () => {
  return (
    <div>
      <Image src="/assets/kerk-8.svg" />
      <Menubar />
    </div>
  );
};

export default Header;
