import { redirect } from 'next/navigation'

export default function ContactPage() {
  // Contact section is now part of About page
  redirect('/about#contact')
}