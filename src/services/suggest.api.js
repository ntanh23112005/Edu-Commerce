import { getFavorites } from "../utils/favorite";
import { getViewed } from "../utils/history";
import { mockOnlineCourses } from '../utils/mockOnlineCourses';

const getSuggestedCourses = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            // 20% error
            if (Math.random() < 0.2) {
                return reject(new Error('Không thể lấy gợi ý lúc này!'));
            }

            const favIds = getFavorites() || [];
            const viewedIds = getViewed() || [];

            // Danh sách khóa học đã tương tác
            const interactedIds = Array.from(new Set([...favIds, ...viewedIds]));
            const interactedCourses = mockOnlineCourses.filter((c) =>
                interactedIds.includes(c.id)
            );

            // Tập hợp tag của khóa đã tương tác
            const relatedTags = Array.from(
                new Set(interactedCourses.flatMap((c) => c.tags))
            );

            // Gợi ý theo tag, loại trừ khóa đã tương tác
            const tagSuggestions = mockOnlineCourses.filter(
                (c) =>
                    !interactedIds.includes(c.id) &&
                    c.tags.some((tag) => relatedTags.includes(tag))
            );

            let suggestions = tagSuggestions.slice(0, 6);

            // Bổ sung khóa isPopular nếu chưa đủ 6
            if (suggestions.length < 6) {
                const popularExtra = mockOnlineCourses
                    .filter((c) =>
                        c.isPopular && !interactedIds.includes(c.id) && !suggestions.includes(c)
                    )
                    .slice(0, 6 - suggestions.length);

                suggestions = [...suggestions, ...popularExtra];
            }

            resolve(suggestions.slice(0, 6));
        }, 1000);
    });

export { getSuggestedCourses }
