import { type LucideIcon } from 'lucide-react';

interface ICard {
    children: React.ReactNode;
    title: string
    icon: LucideIcon,
    total?: number
}

const Card = (props: ICard) => {
    const { title, total } = props

    return (
        <div className="rounded-xl border border-[#F4F4F4] bg-white p-5 shadow-md">
            <div className="flex items-center justify-between gap-3 w-full">
                <div className='flex items-center gap-3'>
                    <div className="rounded p-2">
                        <props.icon size={20} color="#F9CF00" />
                    </div>
                    <p className="text-sm font-semibold">
                        {title}
                    </p>
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
