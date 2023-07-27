import { createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

import SHOP_DATA from '../shop-data.js';


export const CategoriesContext = createContext({
  categoriesMap: { },
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  

  // useEffect( () => {
  //   const getCategoriesMap =async()=>{
  //   const categoryMap = await getCategoriesAndDocuments('categories');
  //   // console.log(categoryMap);
  //   setCategoriesMap(categoryMap);
  //   }
  //   // getCategoriesMap();
    
  // })

  useEffect(() => {
    const categoriesMap = SHOP_DATA.reduce((acc, category) => {
      acc[category.title.toLowerCase()] = category.items;
      return acc;
    }, {});
    setCategoriesMap(categoriesMap);
  }, []);
  

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};