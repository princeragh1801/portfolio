'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Trophy } from 'lucide-react'

export default function Achievements() {
  const achievements = [
    "Secured Global Rank 59 in Codechef Starter 90 Div 3",
    "Knight at Leetcode with max ratings 1874",
    "Max Ratings 1653 at Codechef",
    "Institute rank 3 at GeeksForGeeks among 700+ registered students",
    "Solved 500+ DSA Problems on GeeksForGeeks, LeetCode",
  ]

  return (
    <section id="achievements" className="py-10">
      <motion.h2 
        className="text-3xl font-bold mb-6 text-white text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Achievements
      </motion.h2>
      <Card className="bg-blue-900 bg-opacity-50 backdrop-blur-md border-blue-500">
        <CardContent className="p-6">
          <ul className="space-y-4">
            {achievements.map((achievement, index) => (
              <motion.li 
                key={index} 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Trophy className="h-6 w-6 text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                <span className="text-blue-100">{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}

