import Header from './components/layouts/header/Header'
import Background from './layouts/background/Background'
import './App.css'
import ImgMediaCard from './components/card/ImgMediaCard'

export default function App() {
  return (
    <div className="app-layout">
      {/* Background = layout nền (lớp dưới) */}
    
      
      <Background />
      <Header />
      <ImgMediaCard />
      {/* Header = component ở lớp phía trên */}
     
    </div>
  )
}
