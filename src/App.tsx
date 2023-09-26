import { Button } from './components/ui/button'

export function App() {
  return (
    <>
      <div>Hello</div>
      <Button as={'a'} href="https://www.youtube.com/">
        Link
      </Button>
    </>
  )
}
