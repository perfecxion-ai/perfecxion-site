import { redirect } from 'next/navigation'

export default function BlogPage() {
  // Redirect to Knowledge Hub since blog is now part of it
  redirect('/knowledge')
}