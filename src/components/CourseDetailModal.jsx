import { Modal, Tag, Descriptions } from 'antd';

const CourseDetailModal = ({ open, onClose, course }) => {
    if (!course) return null;

    return (
        <Modal
            open={open}
            title={course.name}
            onCancel={onClose}
            footer={null}
            width={800}
        >
            <img
                src={course.image}
                className="w-100 mb-3 rounded"
                style={{ maxHeight: 250, objectFit: 'cover' }}
            />

            <Descriptions column={1} bordered size="small">
                <Descriptions.Item label="Giảng viên">{course.instructor}</Descriptions.Item>
                <Descriptions.Item label="Thời lượng">{course.duration}</Descriptions.Item>
                <Descriptions.Item label="Mức độ">{course.level}</Descriptions.Item>
                <Descriptions.Item label="Danh mục">{course.category}</Descriptions.Item>
                <Descriptions.Item label="Giá">
                    {course.price.toLocaleString('vi-VN')} đ
                </Descriptions.Item>
                <Descriptions.Item label="Điểm đánh giá">{course.rating} ⭐ ({course.reviews} đánh giá)</Descriptions.Item>
                <Descriptions.Item label="Mô tả chi tiết">{course.longDesc}</Descriptions.Item>
                <Descriptions.Item label="Yêu cầu đầu vào">
                    {course.prerequisites?.map((p, i) => (
                        <div key={i}>• {p}</div>
                    ))}
                </Descriptions.Item>
                <Descriptions.Item label="Tags">
                    {course.tags?.map((tag, idx) => (
                        <Tag color="blue" key={idx}>
                            {tag}
                        </Tag>
                    ))}
                </Descriptions.Item>
            </Descriptions>
        </Modal>
    );
};

export default CourseDetailModal;
