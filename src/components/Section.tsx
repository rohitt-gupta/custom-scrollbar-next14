/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SectionContext } from "@/utils/SectionContext";
import { Section as SectionType } from "@/utils/SectionData";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { FC, HTMLAttributes, useContext, useRef } from "react";

export interface SectionProp extends HTMLAttributes<HTMLElement> {
  section: SectionType;
  isFirst?: boolean;
  isLast?: boolean;
}

const Section: FC<SectionProp> = ({ section, isFirst = false, isLast = false, children, ...props }) => {

  const sectionContext = useContext(SectionContext);
  if (!sectionContext) return;

  const { setActiveSection, setActiveSectionProgress } = sectionContext;

  const container = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: isFirst ? ["start start", "end center"] : isLast ? ["start center", "end end"] : ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0 && latest < 1) {
      setActiveSectionProgress(latest);
      setActiveSection(section.positionId);
    }
  })

  console.log("scrollYProgress", scrollYProgress);


  return (
    <section {...props} ref={container}>
      {children || (
        <div className="flex justify-center items-center pt-20 w-full">
          <h1 className="font-bold text-6xl">{section.title}</h1>
        </div>
      )}
    </section>
  );
};
export default Section 