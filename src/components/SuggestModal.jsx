import { Modal, Row, Col } from 'antd';
import CourseCard from './CourseCard';

const SuggestionModal = ({
    open, onClose,
    suggestions, onDetail,
    onToggleFav, favIds = [] }) => (

    <Modal
        open={open}
        title="Khóa học đề xuất cho bạn"
        width={800}
        footer={null}
        onCancel={onClose}
    >
        <Row gutter={[24, 24]}>
            {suggestions.map((c) => (
                <Col key={c.id} xs={24} sm={24}>
                    <CourseCard
                        course={c}
                        onDetail={onDetail}
                        onToggleFav={onToggleFav}
                        isFav={favIds.includes(c.id)} />
                </Col>
            ))}
        </Row>
    </Modal>
);

export default SuggestionModal;
