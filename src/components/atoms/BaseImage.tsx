import IMG_NotFound from '@/assets/images/IMG_NotFound.png';
import { cn } from '@/lib/utils';

type IBaseImage = React.ImgHTMLAttributes<HTMLImageElement>


const BaseImage = (props: IBaseImage) => {
    return (
        <img
            {...props}
            className={cn('object-cover h-10', props.className)}
            onError={(e) => (e.currentTarget.src = IMG_NotFound)}
        />
    );
};

export default BaseImage;
