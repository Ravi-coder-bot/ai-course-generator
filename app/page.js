
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import ChatBot from '@/components/ChatBot'
import Warning from '@/components/Warning'


export default function Home() {
  return (
    <div>
       <Header/>
      <Hero />
<Warning/>
      <ChatBot/>
    </div>
  );
}
