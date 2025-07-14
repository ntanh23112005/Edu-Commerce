const VIEWED_KEY = 'viewedCourses';
const MAX_HISTORY = 10;

// Thêm khóa học lịch sử đã xem, mới nhất ở đầu (Tối đa 10 lượt xem)
const addViewed = (courseId) => {
    const viewed = JSON.parse(localStorage.getItem(VIEWED_KEY) || '[]');
    const newList = [courseId, ...viewed.filter((id) => id !== courseId)]
        .slice(0, MAX_HISTORY);
    localStorage.setItem(VIEWED_KEY, JSON.stringify(newList));
};

// Lấy lịch sử thêm khóa học
const getViewed = () => {
    return JSON.parse(localStorage.getItem(VIEWED_KEY) || '[]');
}

export { addViewed, getViewed }