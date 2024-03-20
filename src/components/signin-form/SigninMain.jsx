// Import this page for make the signin page functionable (Main Page)
import MidContainer from "./ContainerSignIn";
import ClickSignIn from "../box-appear/ClickSignIn";

export default function SignIn({ onClose }) {
  return <ClickSignIn component={MidContainer} onClose={onClose} />;
}
