import { Hero } from '@/components/home/Hero'
import { About } from '@/components/home/About'
import { Products } from '@/components/home/Products'
import { HomeSolutions } from '@/components/home/HomeSolutions'

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <HomeSolutions />
    </>
  )
}
