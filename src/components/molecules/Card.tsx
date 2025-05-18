import { List, type LucideIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

interface ICard {
    children: React.ReactNode;
    title: string
    icon: LucideIcon,
    total?: number,
    urlDetail?: string
}

const Card = (props: ICard) => {
    const { title, total } = props

    return (
        <div className="rounded-xl border border-[#F4F4F4] bg-white p-5 shadow-md">
            <div className="flex items-center justify-between gap-3 w-full">
                <div className='flex items-center grow gap-3'>
                    <div className="rounded p-2">
                        <props.icon size={20} color="#F9CF00" />
                    </div>
                    <div className='flex items-center gap-3 justify-between w-full grow'>
                        <p className="text-sm font-semibold">{title}</p>
                        {
                            props.urlDetail && (
                                <Button asChild size={'sm'} variant={'ghost'} className='p-1 bg-gray-100 hover:bg-gray-200'>
                                    <Link to={props.urlDetail}> <List /> All Data </Link>
                                </Button>
                            )}
                    </div>
                </div>
                {
                    total && (
                        <p className="text-sm font-semibold">
                            Total: {total}
                        </p>
                    )
                }
            </div>
            <div className='mt-3 h-full flex flex-col justify-start'>
                {props.children}
            </div>
        </div>
    );
};

export default Card;
