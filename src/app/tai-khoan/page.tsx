import Link from "next/Link";

export default function Index() {
  return <div>
    Tai khoan
    <Link href="/san-pham" >click</Link>

    <div style={{padding:10}}>
      <Link href="/" >vehome</Link>
    </div>
  </div>
}
