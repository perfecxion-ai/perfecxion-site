import { redirect } from 'next/navigation'

export default function LearnPage() {
  // Learning content is now part of Knowledge Hub
  redirect('/knowledge')
}