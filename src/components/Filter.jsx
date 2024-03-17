import { Select } from "antd";
import { useDispatch } from "react-redux";
import {
  clearPriorityFilter,
  setPriorityFilter,
} from "../redux/features/priorityFilterSlice";

const { Option } = Select;

const Filter = () => {
  const dispatch = useDispatch();

  const handlePriorityChange = (value) => {
    if (value === "all") {
      dispatch(clearPriorityFilter());
    } else {
      dispatch(setPriorityFilter(value));
    }
  };

  return (
    <div>
      <Select
        defaultValue="All"
        onChange={handlePriorityChange}
        style={{ width: 120 }}
      >
        <Option value="all">All</Option>
        <Option value="Low">Low</Option>
        <Option value="Medium">Medium</Option>
        <Option value="High">High</Option>
      </Select>
    </div>
  );
};

export default Filter;
