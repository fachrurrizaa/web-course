import CategoryItem from './CategoryItem';
import { Context } from '../context/MyContext'
import { useContext } from 'react';

export default function CategoryList() {
    const { categories } = useContext(Context);
  
    return (
      <div className='flex justify-evenly'>
        {categories.slice(0, 4).map((category) => (
          <CategoryItem key={category.id} id={category.id} thumbnails={category.thumbnails} name={category.name} random={Math.floor(Math.random() * 1000)} />
          ))
        }
      </div>
    );
  }
