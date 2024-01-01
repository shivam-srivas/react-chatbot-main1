import React from 'react';
// import { Chat, Header } from '@/components';
import { Chat } from '@/components';

export default function Home() {
  return (
    <main className=" bg-gray-800 flex flex-col  m-auto min-h-screen">
      {/* <Header /> */}
      <Chat />
    </main>
  );
}
