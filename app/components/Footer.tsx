'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <motion.footer 
      className="bg-blue-900 bg-opacity-80 backdrop-blur-md text-white py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-blue-200">&copy; 2024 Prince Raghuwanshi. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {/* <SocialLink href="mailto:princeraghuwanshi1801@gmail.com" icon={<Mail className="h-6 w-6" />} /> */}
          <SocialLink href="tel:+917828016346" icon={<Phone className="h-6 w-6" />} />
          <SocialLink href="https://github.com/princeragh1801" icon={<Github className="h-6 w-6" />} />
          <SocialLink href="https://www.linkedin.com/in/prince-raghuwanshi-b4a3541b1/" icon={<Linkedin className="h-6 w-6" />} />
        </div>
      </div>
    </motion.footer>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-blue-200 hover:text-white transition duration-300"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  )
}

