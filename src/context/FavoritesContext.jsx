import { createContext, useContext, useState } from 'react';
import { addFavorite, getFavorites } from '../utils/favorite';

const FavContext = createContext();

export const useFav = () => useContext(FavContext);

export const FavoritesProvider = ({ children }) => {
    const [favIds, setFavIds] = useState(getFavorites());

    const toggleFav = (id) => {
        const updated = addFavorite(id);
        setFavIds(updated);
        return updated;
    };

    return (
        <FavContext.Provider value={{ favIds, toggleFav }}>
            {children}
        </FavContext.Provider>
    );
};
