const FAVOR_KEY = 'favoriteCourses';

// Lấy danh sách favor
const getFavorites = () => {
    return JSON.parse(localStorage.getItem(FAVOR_KEY) || '[]');
}

// Thêm yêu thích (Chưa có thì add, có rồi thì xóa)
const addFavorite = (courseId) => {

    let existedFavorites = getFavorites();

    existedFavorites = existedFavorites.includes(courseId)
        ? existedFavorites.filter((id) => id !== courseId)
        : [courseId, ...existedFavorites];

    localStorage.setItem(FAVOR_KEY, JSON.stringify(existedFavorites));

    return existedFavorites;
};


export { getFavorites, addFavorite }