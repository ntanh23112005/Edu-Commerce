import { useState } from 'react';
import { Row, Col, Button, Spin, Divider } from 'antd';
import { toast } from 'react-toastify';
import { mockOnlineCourses } from '../utils/mockOnlineCourses';
import { useCourseModal } from '../context/ModalContext';
import { addViewed } from '../utils/history';
import { getSuggestedCourses } from '../services/suggest.api';
import CourseCard from '../components/CourseCard';
import SuggestionModal from '../components/SuggestModal';
import CourseFilter from '../components/CourseFilter';

const HomePage = () => {
    // lọc
    const [search, setSearch] = useState('');
    const [price, setPrice] = useState('all');

    // gợi ý
    const [suggestions, setSuggestions] = useState([]);
    const [loadingSug, setLoadingSug] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [btnLoading, setBtnLoading] = useState(false);

    // bộ lọc
    const filteredCourses = mockOnlineCourses.filter((c) => {
        const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());

        let matchPrice = true;
        if (price === 'lt500') {
            matchPrice = c.price < 500000;
        } else if (price === '500-1000') {
            matchPrice = c.price >= 500000 && c.price <= 1000000;
        } else if (price === 'gt1000') {
            matchPrice = c.price > 1000000;
        }

        return matchSearch && matchPrice;
    });


    // modal context
    const { openModal } = useCourseModal();
    // lấy lịch sử view
    const handleDetail = (course) => {
        addViewed(course.id);
        openModal(course);
    };
    //hiện gợi ý 
    const handleSuggest = async () => {
        setLoadingSug(true);
        setBtnLoading(true);
        try {
            const data = await getSuggestedCourses();
            setSuggestions(data);
            toast.success("Đã lấy khóa học gợi ý !")
            setModalOpen(true);
        } catch (err) {
            toast.error(err.message);
        } finally {
            setLoadingSug(false);
            setBtnLoading(false);
        }
    };

    return (
        <>
            <Row gutter={[24, 24]}>
                {/* cột filter */}
                <Col xs={24} md={6}>
                    <CourseFilter
                        search={search}
                        setSearch={setSearch}
                        price={price}
                        setPrice={setPrice}
                    />

                    <Button
                        type="primary"
                        loading={btnLoading}
                        block
                        className="mt-3 mb-5"
                        onClick={handleSuggest}
                    >
                        Gợi ý sản phẩm phù hợp
                    </Button>

                    {loadingSug && <Spin tip="Đang gợi ý..." />}
                </Col>

                {/* cột danh sách */}
                <Col xs={24} md={18}>
                    <Divider orientation="left">Tất cả khoá học</Divider>
                    {filteredCourses.map((c) => (
                        <CourseCard key={c.id} course={c} onDetail={handleDetail} />
                    ))}
                    {filteredCourses.length === 0 && <p>Không tìm thấy khoá học nào.</p>}

                </Col>
            </Row>

            <SuggestionModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                suggestions={suggestions}
                onDetail={handleDetail}
            />
        </>
    );
};

export default HomePage;
