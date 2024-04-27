"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./BentoGrid"

export function WobbleCardDemo() {
  return (
    <div className="gap-4 grid grid-cols-1 lg:grid-cols-3 mx-auto w-full max-w-7xl">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="font-semibold text-balance text-base text-left text-white md:text-xl lg:text-3xl tracking-[-0.015em]">
            Cohorts: Not only free, but also profitable.
          </h2>
          <p className="mt-4 text-base/6 text-left text-neutral-200">
            #DominateTwitter cohorts are not only free, but they provide more than 100 dollors woth of bounty each participant
          </p>
        </div>
        <Image
          src="/dt-banner.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="-right-4 lg:-right-[40%] -bottom-10 absolute rounded-2xl filter grayscale object-contain"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80 font-semibold text-balance text-base text-left text-white md:text-xl lg:text-3xl tracking-[-0.015em]">
          Open source and build in public
        </h2>
        <p className="mt-4 max-w-[26rem] text-base/6 text-left text-neutral-200">
          We learn in public, build in public and win in public. No behind the scenes.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg font-semibold text-balance text-base text-left text-white md:text-xl lg:text-3xl tracking-[-0.015em]">
            More then 20 bounties monthly of worth more than 200$.
          </h2>
          <p className="mt-4 max-w-[26rem] text-base/6 text-left text-neutral-200">
            We organise bounties every alternate day which helps people win free bounties and goodies, and a chance to get hired by the SPONSERS
          </p>
        </div>
        <Image
          src="/dt-banner.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="-right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 absolute rounded-2xl object-contain"
        />
      </WobbleCard>
    </div>
  );
}
