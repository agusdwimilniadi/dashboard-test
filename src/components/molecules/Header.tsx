import { useSidebar } from '../ui/sidebar';
import HeaderSide from './HeaderSide'
import { LayoutGrid } from 'lucide-react'

interface IHeader {
    title: string;
    description: string
}
const Header = (props: IHeader) => {
    const { title, description } = props
    const { toggleSidebar } = useSidebar()
    return (
        <div className="bg-primary-foreground  rounded-xl p-5 flex justify-between items-center mt-5">
            <div className='flex flex-col gap-3'>
                <div className="flex items-center gap-3">
                    <LayoutGrid onClick={() => toggleSidebar()} color="white" size={24} />
                    <h1 className="lg:text-2xl text-md font-semibold text-white">
                        RUN System – {title}
                    </h1>
                </div>
                <p className="text-white text-sm">
                    {description}
                </p>
            </div>
            <HeaderSide />
        </div>
    )
}

export default Header