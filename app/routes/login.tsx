
import type { Route } from "./+types/login";
import Login from "../components/auth/login";
export async function loader({ request }: Route.LoaderArgs) {
  return null; 
}

export default function LoginPage() {
  return (
    <Login
      logo={{
        url: "/",
        src: "/logo.png",
        alt: "Logo",
        title: "Bismillah Villa"
      }}
    />
  );
}
