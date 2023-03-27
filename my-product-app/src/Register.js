import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { API_GET, API_POST } from "./api";
import UserItem from "./UserItem";
import "./Register.css";

export default function Register() {

    const [users, setUsers] = useState([]);
    const [userTypes, setUserTypes] = useState([]);
    const [userTypeId, setUserTypeId] = useState(0);

    

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                "http://localhost:8080/api/user_types",
                {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        'content-Type': 'application/json',
                        Authorization: "Bearer " + localStorage.getItem("access_token")
                    }
                }
            );

            let json = await response.json();
            setUserTypes(json.data);
        }

        fetchData();
    }, []);

    


    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                "http://localhost:8080/api/users/type/" + userTypeId,
                {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        'content-Type': 'application/json',
                        Authorization: "Bearer " + localStorage.getItem("access_token")
                    }
                }
            );

            const json = await response.json();
            setUsers(json.data);
        }

        fetchData();
    }, [userTypeId]);

    
    const fetchUsers = async () => {
        let json = await API_GET("users/type/" + userTypeId);
        setUsers(json.data);
    }

    const onDeleteU = async (data) => {
        let json = await API_POST("user/delete", {
            user_id: data.user_id
        });

        if (json.result) {
            fetchUsers();
        }
    }


    if (localStorage.getItem("access_token")) {
        return (
            <div className="container">
                
                <select value={userTypeId} onChange={(e) => setUserTypeId(e.target.value)}>
                    <option value={0}>เพศ</option>
                    {
                        userTypes.map(item => (
                            <option key={item.user_type_id} value={item.user_type_id}>
                                {item.user_type_name}
                            </option>
                        ))
                    }
                </select>
                        
                <Link to={"/ureport"} className="btn btn-outline-primary me-3">รายงาน</Link>
                
                
                <div className="container mt-3">
                    {
                        users.map(item => (
                            <UserItem 
                            key={item.user_id}
                            data={item} 
                            onDelete={onDeleteU}/>
                        ))
                    }
                </div>
            </div>

        );

    }

    return (
        <Navigate to="/" replace />

    );
}
