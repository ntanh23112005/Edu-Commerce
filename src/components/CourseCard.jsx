import { Card, Row, Col, Typography, Button, Tooltip, Rate } from 'antd';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { useFav } from '../context/FavoritesContext';
import { toast } from 'react-toastify';

const { Title, Text } = Typography;

const CourseCard = ({ course, onDetail }) => {

    const { favIds, toggleFav } = useFav();
    const isFav = favIds.includes(course.id);


    const handleToggleFav = () => {
        toggleFav(course.id);
        toast.success(isFav ? 'Đã bỏ yêu thích' : 'Đã thêm vào yêu thích');
    }

    return (
        <Card hoverable className="mb-3" bodyStyle={{ padding: 16 }}>
            <Row gutter={16} align="middle">
                <Col xs={24} md={6}>
                    <img
                        src={course.image}
                        alt={course.name}
                        style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: 8 }}
                    />
                </Col>

                <Col xs={24} md={18}>
                    <Row justify="space-between" align="top">
                        <Col xs={24} md={18}>
                            <Title level={5} className="mb-1">{course.name}</Title>
                            <Text type="secondary">{course.shortDesc}</Text>
                            <div className="mt-2">
                                <Rate allowHalf disabled defaultValue={course.rating} />
                            </div>
                            <div className="mt-2">
                                <Button type="link" onClick={() => onDetail(course)}>Xem chi tiết</Button>
                            </div>
                        </Col>

                        <Col xs={24} md={6}>
                            <div className="text-end">
                                <Text strong style={{ color: '#1890ff', fontSize: '16px' }}>
                                    {course.price.toLocaleString()}₫
                                </Text>
                                <Tooltip title={isFav ? 'Bỏ yêu thích' : 'Thêm yêu thích'}>
                                    <Button
                                        type="text"
                                        icon={isFav ? <HeartFilled style={{ color: 'red' }} /> : <HeartOutlined />}
                                        onClick={handleToggleFav}
                                    />
                                </Tooltip>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card>
    );
};

export default CourseCard;