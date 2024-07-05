import { UserForm } from "./view/UserForm";
import { User } from "./models/User";

const user = User.buildUser({ name: "NAME", age: 21 });

const root = document.getElementById("root");

if (root) {
  const userForm = new UserForm(root, user);
  userForm.reder();
} else {
  throw new Error("root element not found");
}
