import Link from "next/link";
import { useEffect } from 'react';
import { useRouter } from "next/router";

export default function NotFound() {

    const router = useRouter();

    useEffect(() => {
      setTimeout(() => {
          router.push("/");
      }, 3000);
    }, [])
    
    
  return (

    <div className="not-found">
      <h1>Ooops....</h1>
      <h2>The page doesnt Exist.</h2>
      <p>
        Click Here to Go back to{" "}
        <Link href="/">
          <a>HomePage</a>
        </Link>
      </p>
    </div>
  );
}
