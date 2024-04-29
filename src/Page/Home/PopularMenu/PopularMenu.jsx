import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <div className='mb-12'>
            <div>
                <SectionTitle heading="From Our Menu" subHeading="Popular Items"></SectionTitle>
            </div>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <button className='btn btn-outline border-0 border-b-4 mt-4'> View Full Menu</button>
        </div>
    );
};

export default PopularMenu;