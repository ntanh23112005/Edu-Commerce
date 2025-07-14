import { Input, Radio, Divider } from 'antd';

const CourseFilter = ({ search, setSearch, price, setPrice }) => {
    return (
        <div>
            <h5>Tìm kiếm</h5>
            <Input
                placeholder="Tìm theo tên khoá học"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                allowClear
            />

            <Divider />

            <h5>Lọc theo giá</h5>
            <Radio.Group
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                className="d-flex flex-column gap-2"
            >
                <Radio value="all">Tất cả</Radio>
                <Radio value="lt500">Dưới 500K</Radio>
                <Radio value="500-1000">500K - 1 triệu</Radio>
                <Radio value="gt1000">Trên 1 triệu</Radio>
            </Radio.Group>
        </div>
    );
};

export default CourseFilter
