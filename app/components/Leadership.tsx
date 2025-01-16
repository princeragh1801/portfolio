'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Leadership() {
  return (
    <section id="leadership" className="py-10">
      <motion.h2 
        className="text-3xl font-bold mb-6 text-white text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Leadership and Technical Contributions
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="bg-blue-900 bg-opacity-50 backdrop-blur-md border-blue-500">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-white">Newton School Coding Club | Senior Technical Coordinator</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside mt-4 space-y-2 text-blue-100">
              <li>Successfully led a team of passionate tech enthusiasts to organize and execute initiatives that enhanced coding skills and fostered a collaborative learning environment among college students.</li>
              <li>Organized and led a 30-day daily coding challenge on Hackerrank, enabling participants to improve their analytical skills and coding proficiency.</li>
              <li>Coordinated expert talks and workshops with industry professionals, providing valuable insights and guidance to college students pursuing careers in technology and coding.</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

