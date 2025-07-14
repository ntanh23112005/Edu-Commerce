import { Divider, Row, Col, Empty } from 'antd';
import { useFav } from '../context/FavoritesContext';
import { useCourseModal } from '../context/ModalContext';
import { mockOnlineCourses } from '../utils/mockOnlineCourses';
import CourseCard from '../components/CourseCard';

const FavoritesPage = () => {
    const { favIds } = useFav();
    const { openModal } = useCourseModal();

    const favCourses = mockOnlineCourses.filter((c) => favIds.includes(c.id));

    return (
        <>
            <Divider orientation="left">Khoá học đã yêu thích</Divider>

            {favCourses.length === 0 ? (
                <Empty description="Bạn chưa yêu thích khoá học nào" />
            ) : (
                <Row gutter={[16, 16]}>
                    {favCourses.map((c) => (
                        <Col span={24} key={c.id}>
                            <CourseCard course={c} onDetail={() => openModal(c)} />
                        </Col>
                    ))}
                </Row>
            )}
        </>
    );
};

export default FavoritesPage;
