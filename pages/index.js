import { SmoothScrollProvider, SmoothScrollContext } from '../lib/SmoothScroll';
import Home from './index2.js'

export default function HomePage() {
  return (
    <SmoothScrollProvider options={{ smooth: true }}>
      <Home />
    </SmoothScrollProvider>
  )
}