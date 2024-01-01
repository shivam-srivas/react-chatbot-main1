import React from 'react';
import { Chat } from '@/components';

export default function Home() {
  return (
    <main className=" bg-gray-800 flex flex-col  m-auto min-h-screen">
      <div className='text-white mt-10 text-center'> Click on the right bottom corner , Message Icon to use the ChatBot. </div>
      
      <Chat />
    </main>
  );
}
