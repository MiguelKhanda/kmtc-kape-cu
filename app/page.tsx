import Card from "@/components/Card";
import Image from "next/image";

export default function Home() {
  const username = ''
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center'>
      <div className='glass-container max-w-xs sm:max-w-md md:max-w-lg p-3 text-xl text-white'>
          <h1>Thank you {username} for signing up</h1>
          <p>We are working on the rest of the website.</p>
          <p> Thanks for your co-operation</p>
      </div>
    </div>
  );
}
