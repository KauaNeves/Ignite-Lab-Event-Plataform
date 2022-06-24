import { ArrowCircleRight } from "phosphor-react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{slug: string}>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        { slug 
        ? <Video />
        : <div className="flex-1 flex flex-col items-center justify-center gap-5">
            <div className="flex flex-col items-center justify-center gap-5 border border-[#00B37E] rounded-2xl p-10">
            <ArrowCircleRight color="#00B37E" size={60} />
            <strong>ACESSE AS AULAS AO LADO</strong>
            </div>
          </div> 
         }
        <Sidebar />
      </main>
    </div>
  )
}