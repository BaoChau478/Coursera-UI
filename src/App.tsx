import Header from './components/layouts/header/Header'
import Background from './layouts/background/Background'
import './App.css'

export default function App() {
  return (
    <div className="app-layout">
      {/* Background = layout nền (lớp dưới) */}
      <Background />
      {/* Header = component ở lớp phía trên */}
      <Header />
    </div>
  )
}
