import Login from "./Login";
import SignUp from "./SignUp";

export function Conditional_rendering(value) {
  const lookup = {
    a: Login,
    b: SignUp,
  };
  const Component = lookup[value];
  return Component;
}
