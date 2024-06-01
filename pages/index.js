import Layout from "@/components/layout";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      {" "}
      <div className="text-blue-900 flex justify-between">
        <h2>
          {" "}
          Hello, <b>{session?.user?.name}</b>
        </h2>
        <div className="flex bg-gray-300 text-black rounded-lg overflow-hidden">
          <Image
            src={session?.user?.image}
            alt="reshma"
            className="h-6 w-6"
            height={100}
            width={100}
          />
          <span className=" px-2 "> {session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  );
}
