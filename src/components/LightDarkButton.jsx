
export default function LightDarkButton() {
  const handleLightDark = (e) => {
    const oldTheme = document.documentElement.style.getPropertyValue('--theme')
    document.documentElement.style.setProperty('--theme', oldTheme === 'light' ? 'dark' : 'light')
  };

  return (
    <button type='button' id='light-dark-button' onClick={handleLightDark}>Set Light/Dark</button>
  )
}