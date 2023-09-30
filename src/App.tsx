// import { Button } from './components/ui/button'

import { Button } from '@/components'

export function App() {
  return (
    <>
      <div>Hello World</div>
      <Button as={'a'} href="https://www.youtube.com/">
        Link
      </Button>
    </>
  )
}
