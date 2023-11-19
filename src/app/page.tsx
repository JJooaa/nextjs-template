import { H1 } from '@/components/typography/H1'
import { Paragraph } from '@/components/typography/paragraph'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <H1>This what this looks like</H1>
      <Paragraph>Hello what is this all about?</Paragraph>
      <Button>Hello world</Button>
      <Link href="/markdown/test">Test</Link>
    </div>
  )
}
