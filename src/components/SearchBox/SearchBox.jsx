import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import module from "./SearchBox.module.css";
import { selectFilter } from "../../redux/selectors";

const SearchBox = () => {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        const action = setFilter(evt.target.value)
        dispatch(action)
    };

    return (
        <label className={module.label}>
            <span>Find contacts by name</span>
            <input value={filter} className={module.input} type="text" name="name" onChange={handleChange} />
        </label>
    )
}

export default SearchBox