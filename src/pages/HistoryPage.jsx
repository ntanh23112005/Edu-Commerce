import { Divider, Row, Col, Empty } from 'antd';
import { useEffect, useState } from 'react';
import { getViewed } from '../utils/history';
import { useCourseModal } from '../context/ModalContext';
import { mockOnlineCourses } from '../utils/mockOnlineCourses';
import CourseCard from '../components/CourseCard';

const HistoryPage = () => {
    const [viewedIds, setViewedIds] = useState(() => getViewed() || []);
    const { openModal } = useCourseModal();

    useEffect(() => setViewedIds(getViewed() || []), []);

    const viewedCourses = viewedIds
        .map((id) => mockOnlineCourses.find((c) => c.id === id))
        .filter(Boolean);

    return (
        <>
            <Divider orientation="left">10 khoá học đã xem gần đây</Divider>

            {viewedCourses.length === 0 ? (
                <Empty description="Bạn chưa xem khoá học nào gần đây" />
            ) : (
                <Row gutter={[16, 16]}>
                    {viewedCourses.map((c) => (
                        <Col span={24} key={c.id}>
                            <CourseCard course={c} onDetail={() => openModal(c)} />
                        </Col>
                    ))}
                </Row>
            )}
        </>
    );
};

export default HistoryPage;
