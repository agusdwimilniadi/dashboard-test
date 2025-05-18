import { User, User2 } from 'lucide-react';
import { Button } from '../ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';


const HeaderSide = () => {
    return (
        <div className="flex items-center gap-5">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className='text-white rounded-full border cursor-pointer border-white'>
                        <User className="h-6 w-6" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 me-10 mt-3">
                    <DropdownMenuLabel className='flex items-center gap-3'>
                        <User2 className='h-5 w-5' />
                        <div className='flex flex-col gap-1'>
                            <span className='text-sm font-semibold'>Hi HR RunSystem</span>
                            <span className='text-xs text-muted-foreground'>hr@runsystem.id</span>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default HeaderSide;
