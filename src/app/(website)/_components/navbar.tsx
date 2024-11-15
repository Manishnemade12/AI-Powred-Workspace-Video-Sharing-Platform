import { Button } from '@/components/ui/button'
import { Menu, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const LandingPageNavbar = (props: Props) => {
    return (
        <div className='flex w-full justify-between items-center'>
            <div className='text-3xl font-semibold flex items-center gap-x-3'>
                <Menu className='w-8 h-8' />
                <Image
                    alt='logo'
                    src='/opal-logo.svg'
                    width={40}
                    height={40}
                />
                Opal
            </div>
            <div className='hidden gap-x-10 items-center lg:flex'>
                <Link href='/' className='bg-[#7320dd] py-2 px-5 font-semibold text-lg rounded-full hover:bg-[#7320dd]/80'>
                    Home</Link>
                <Link href='/'>Pricing</Link>
                <Link href='/'>contact</Link>
            </div>
            <Button className='text-base flex gap-x-2'>
                <Link href='/auth/sign-in'>
                    <User fill='#000' />
                    Login
                </Link>
            </Button>
            <div>
            </div>
        </div>

    )
}

export default LandingPageNavbar
// import { Link, Menu } from 'lucide-react'
// import Image from 'next/image'

// type Props = {}

// const LandingPageNavbar: React.FC<Props> = () => {
//     return (
//         <div className='flex w-full justify-between items-center p-4'>
//             {/* Logo Section */}
//             <div className='text-3xl font-semibold flex items-center gap-x-3'>
//                 <Menu className='w-8 h-8'/>
//                 <Image
//                     alt='logo'
//                     src='/opal-logo.svg'
//                     width={40}
//                     height={40}
//                 />
//                 Opal
//             </div>

//             {/* Navigation Links */}
//             <div className='gap-x-10 items-center flex lg:flex'>
//                 <Link
//                     href='/'
//                     className='bg-[#7320dd] py-3 px-6 font-semibold text-lg rounded-full hover:bg-[#7320dd]/80'
//                 >
//                     Home
//                 </Link>
//                 <Link
//                     href='/pricing'
//                     className='text-lg text-[#7320dd] hover:text-[#5a1ad7]'
//                 >
//                     Pricing
//                 </Link>
//                 <Link
//                     href='/contact'
//                     className='text-lg text-[#7320dd] hover:text-[#5a1ad7]'
//                 >
//                     Contact
//                 </Link>
//                 <Link
//                     href='/lund'
//                     className='text-lg text-[#7320dd] hover:text-[#5a1ad7]'
//                 >
//                     hgh
//                 </Link>
//             </div>
//         </div>
//     )
// }

// export default LandingPageNavbar
