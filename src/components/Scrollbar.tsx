'use client'
import { SectionContext } from "@/utils/SectionContext";
import { Section } from "@/utils/SectionData";
import { FC, useContext } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export interface ScrollbarProps {
  sections: Section[]
}

const Scrollbar: FC<ScrollbarProps> = ({ sections }) => {
  const sectionContext = useContext(SectionContext);
  if (!sectionContext) return;

  const { activeSection, activeSectionProgress } = sectionContext;
  return (
    <motion.div className="right-10 z-10 fixed flex flex-col justify-center gap-2 h-full min-h-screen" >
      {sections.map((section) => (

        <motion.div
          key={section.positionId}
          layout
          transition={{ duration: 0.3 }}
          style={{
            height: activeSection == section.positionId ? "32px" : "8px",
            backgroundColor: activeSection === section.positionId ? "rgb(200,200,200)" : "rgb(82,82,82)",
            borderRadius: 9999,
          }}
          className="w-2 h-2 overflow-hidden" >
          {
            activeSection === section.positionId && (
              <motion.div
                style={{ height: activeSectionProgress * 100 + "%" }}
                className="bg-green-600 w-full"
              ></motion.div>
            )
          }
        </motion.div>

      ))}
    </motion.div>
  );
};
export default Scrollbar 