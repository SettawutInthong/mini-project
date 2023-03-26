import { Link } from "react-router-dom";

export default function UserItem(props) {

    const onDeleteU = async () => {
        props.onDeleteU(props.data);
    }

    return (
        <div className="row border rounded shadow-sm mt-3">
           
            <div className="col-7">
                <h5 className="text-rpimary">{props.data.user_name}</h5>
                <Link to={`/user/${props.data.user_id}`} className="btn btn-outline-primary me-3">แก้ไข</Link>
                <button type="button" className="btn btn-outline-danger" onClick={onDeleteU}>ลบผู้ใช้</button>
            </div>
            
        </div>
    );
}