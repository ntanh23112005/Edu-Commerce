import { createContext, useState, useContext } from 'react';
import CourseDetailModal from '../components/CourseDetailModal';

const ModalContext = createContext();

export const useCourseModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
    const [selectedCourse, setSelectedCourse] = useState(null);

    const openModal = (course) => setSelectedCourse(course);
    const closeModal = () => setSelectedCourse(null);

    return (
        <ModalContext.Provider value={{ openModal }}>
            {children}
            {/* Treo modal, nhưng chỉ hiển thị khi có selectedCourse */}
            <CourseDetailModal open={!!selectedCourse} course={selectedCourse} onClose={closeModal} />
        </ModalContext.Provider>
    );
};
