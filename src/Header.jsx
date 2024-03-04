import './Header.css'


export default function Header(props) {

  return (
    <div className="header" style={{ backgroundImage: `url(${props.url})`}}>
      <h1>POPCORNFLIX</h1>
    </div>
  )
}