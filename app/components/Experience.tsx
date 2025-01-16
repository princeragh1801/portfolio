'use client'

import { motion } from 'framer-motion'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { Briefcase } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="py-10">
      <motion.h2 
        className="text-3xl font-bold mb-6 text-white text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="July 2024 – Present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<Briefcase />}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">PageUp Software Services Pvt Ltd, Jabalpur, MP</h4>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Gained in-depth knowledge of .NET technologies, focusing on backend development, RESTful API design, and database management.</li>
            <li>Utilized SQL Server for data storage, JWT for authentication, and role-based authorization to ensure secure access control.</li>
            <li>Enhanced the overall system's scalability and maintainability by writing clean, modular code.</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  )
}

