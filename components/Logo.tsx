import Link from 'next/link'


const Logo = ({href = '/'}:{href?:string}) => {
  return (
    <Link  href={href}>
      <h1 className='font-semibold text-xl'>BatleNA</h1>
    </Link>
    
  )
}

export default Logo