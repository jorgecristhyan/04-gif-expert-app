import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export  const GifExpertApp = () => {
    const [categories, setCategories] = useState([ 'Harry Potter']);
  
    const onAddCategory = (newCategory) => {
        if( categories.includes( newCategory ) ) return;

        setCategories(cat => [newCategory, ...cat]);
    };

    return (
    <>
        {/* titulo */}
        <h1>GifExpertApp by Cris Contreras</h1>

        {/* input */}
        <AddCategory 
            onNewCategory={ (newCategory) => onAddCategory(newCategory)}
        />

        { categories.map( category => 
                <GifGrid 
                key={category} 
                category={category}
            />
        ) }

        {/* Gif items */}
        
    </>
)}
