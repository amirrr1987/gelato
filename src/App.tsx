import { GButton } from "./components/ui"
import Layout from "./layouts"

const App = () => {

  return (
    <Layout>
      <div className='flex items-center gap-2 p-4'>
        <GButton color="primary" variant="fill" size="lg" rounded="lg" onClick={() => console.log('clicked me')}>
          کلیک کنید
        </GButton>
        <GButton color="primary" variant="outline">
          کلیک کنید
        </GButton>
        <GButton color="primary" variant="text">
          کلیک کنید
        </GButton>

      </div>
      <div className='flex items-center gap-2 p-4'>
        <GButton color="secondary" variant="fill" size="sm" onClick={() => console.log('clicked me')}>
          کلیک کنید
        </GButton>
        <GButton color="secondary" variant="outline" rounded="sm">
          کلیک کنید
        </GButton>
        <GButton color="secondary" variant="text">
          Click me
        </GButton>

      </div>
    </Layout>
  )
}

export default App