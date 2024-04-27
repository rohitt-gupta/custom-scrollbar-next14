"use client";
import Scrollbar from "@/components/Scrollbar";
import Section from "@/components/Section";
import { SectionContext, useSectionContext } from "@/utils/SectionContext";
import { sections } from "@/utils/SectionData";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/TextGeneration";
import { WobbleCardDemo } from "@/components/WobbleCard";
const words = `Over the course of a 60-day program, a cohort of 10 individuals, guided by 3 dedicated mentors, will secure 7 remarkable job placements.`;
export default function Home() {
  const { values } = useSectionContext();
  return (
    <main className="relative">
      <SectionContext.Provider value={values}>
        <Scrollbar sections={sections} />
        <Section section={sections[0]} isFirst className="bg-[#F5EFE6] h-screen">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, type: "ease" }} className="flex flex-col justify-center items-center gap-2 p-24 w-full h-full">
            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, type: "ease" }} className="font-bold text-7xl"><Image src="/dt-logo.png" alt="Ai Pin" width={100} height={100}></Image> DominateTwitter Club</motion.h1>
            <p className="my-4 max-w-md text-center text-gray-700">A community of digital nomads aiming for Twitter success while living life on their own terms.</p>
            <div className="relative overflow-hidden aspect-video">
              <Image
                src="/dt-banner.png"
                alt="Ai Pin"
                objectFit="cover"
                width={1000}
                height={500}
                className="rounded-3xl"
              />
            </div>
            <Link href="https://tally.so/r/3EPQZo" className="bg-neutral-800 hover:bg-neutral-600 px-6 py-2 rounded-md font-semibold text-white transition-colors duration-200">
              Join now
            </Link>
          </motion.div>
        </Section>
        <Section section={sections[1]} className="bg-[#153448]">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, type: "ease" }} className="flex flex-col justify-start items-start gap-2 px-52 p-28 w-full h-full">
            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, type: "ease" }} className="font-bold text-6xl text-gray-200"> #ClassOf24</motion.h1>
            {/* <div className="flex flex-col justify-center items-center gap-2 my-4">
              <p className="my- max-w-md text-center text-gray-200">10 People, 3 Mentors, 7 Placements, 60 Days</p>
              <p className="my- max-w-md text-center text-gray-200">Let&apos;s go.</p>
            </div> */}
            <div className="my-6 max-w-lg">
              <TextGenerateEffect words={words} />
            </div>

            <div className="flex justify-center items-start gap-16">
              <Link href="https://twitter.com/vaishnavi0199/status/1783174040808718423" className="relative">
                <div className='bg-gray-100/5 -m-2 lg:-m-4 p-2 lg:p-4 rounded-xl lg:rounded-2xl ring-1 ring-gray-100/10 ring-inset'>
                  <Image
                    src="/class-of-24.png"
                    alt="classof24"
                    objectFit="cover"
                    width={587}
                    height={851}
                    className="rounded-xl"
                  />
                </div>
              </Link>
              <Link href="https://twitter.com/whyrohitwhy/status/1783155387673591920" className="relative">
                <div className='bg-gray-100/5 -m-2 lg:-m-4 p-2 lg:p-4 rounded-xl lg:rounded-2xl ring-1 ring-gray-100/10 ring-inset'>
                  <Image
                    src="/class-of-24-2.png"
                    alt="classof24"
                    objectFit="cover"
                    width={587}
                    height={851}
                    className="rounded-xl"
                  />
                </div>
              </Link>
            </div>
          </motion.div>
        </Section>
        <Section section={sections[2]} className="bg-[#FCFFE0] h-screen">
          <div className="flex justify-center items-center h-full">

            <WobbleCardDemo />
          </div>
        </Section>
        <Section isLast section={sections[3]} className="flex justify-center items-center bg-[#F5EFE6] pt-20 sm:pt-24 pb-14 sm:pb-20 lg:pb-24 h-gull min-h-screen">
          <div className='flex justify-center items-center h-fit'>
            <div className="flex flex-col items-center gap-16 max-w-[56.25rem] font-medium text-zinc-900">
              <h1 className="text-7xl text-center max-md:text-4xl leading-[68.2px] tracking-tighter">
                Be a part of community which will help you grow in every aspect of life!
              </h1>
              <Link href="https://tally.so/r/3EPQZo" className="bg-neutral-800 hover:bg-neutral-600 px-6 py-2 rounded-md font-semibold text-white transition-colors duration-200">
                Join now
              </Link>
            </div>
          </div>
        </Section>
      </SectionContext.Provider>
    </main>
  );
}
