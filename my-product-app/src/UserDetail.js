import { API_GET, API_POST } from "./api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import { SERVER_URL } from "./app.config";

export default function UserDetail() {
    let params = useParams();

    const [userId, setUserId] = useState(0);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [validated, setValidated] = useState(false);
    const [selectedFile, setSelectedFile] = useState("");
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
                        'Content-Type': 'application/json',
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
        async function fetchData(userId) {
            let json = await API_GET("user/" + userId);

            var data = json.data[0];

            setUserId(data.user_id);
            setUsername(data.user_name);
            setUserTypeId(data.user_type_id);
            setPassword(data.user_pwd);
            setFirstName(data.first_name);
            setLastName(data.last_name);
            setEmail(data.email);
            
        }

        if (params.userId != "add") {
            fetchData([params.userId]);
        }
    }, [params.userId]);

    const onFileSelected = (e) => {
        if (e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
        }
    }

    /*const onUploadImage = async () => {
        const formData = new FormData();
        formData.append('file', selectedFile);

        let response = await fetch(
            SERVER_URL + "api/product/upload/" + productId,
            {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + localStorage.getItem("access_token"),
                },
                body: formData,
            }
        );

        let json = await response.json();

        setImageUrl(json.data);
    }*/

    /*const getImageComponent = () => {
        return (
            <div className="container m-auto">
                <Form>
                    <Row>
                        <Form.Group as={Col} md="3" controlId="formImage" className="mb-3">
                            <img src={`${SERVER_URL}images/${imageUrl}`} width={150} alt="Upload status" />
                        </Form.Group>
                        <Form.Group as={Col} md="9" controlId="formFile" className="mb-3">
                            <Form.Label>เลือกรูปภาพ</Form.Label>
                            <Form.Control
                                type="file"
                                name="file"
                                onChange={onFileSelected} />
                            <Button
                                type="button"
                                className="mt-3"
                                onClick={onUploadImage}
                            >Upload</Button>
                        </Form.Group>
                    </Row>
                </Form>
            </div>
        );
    }*/


    const doCreateUser = async () => {
        const response = await fetch(
            "http://localhost:8080/api/user/add",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + localStorage.getItem("access_token")
                },
                body: JSON.stringify({
                    user_name: username,
                    user_type_id: userTypeId,
                    user_pwd: password,
                    first_name: firstName,
                    last_name: lastName,
                    email: email
                })
            }
        );
        let json = await response.json();
        if (json.result) {
            window.location = "/login";
        }
    }

    const doUpdateUser = async () => {
        const json = await API_POST("user/update", {
            user_id: userId,            
            user_name: username,
            user_type_id: userTypeId,
            user_pwd: password,
            first_name: firstName,
            last_name: lastName,
            email: email
            
        });

        if (json.result) {
            window.location = "/home";
        }
    }

    const onSaveU = (event) => {
        const form = event.currentTarget;
        event.preventDefault();

        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            if (params.userId == "add") {
                doCreateUser();
            } else {
                doUpdateUser();
            }
        }

        setValidated(true);
    }

    return (
        
            <>
            <div className="container m-auto">
                <Form noValidate validated={validated} onSubmit={onSaveU}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validateProductName">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                value={username}
                                placeholder="Username"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                กรุณากรอก Username
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>   

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validateProductName">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                value={password}
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                กรุณากรอก Password
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>      

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validateProductName">
                            <Form.Label>FirstName</Form.Label>
                            <Form.Control
                               
                                type="text"
                                value={firstName}
                                placeholder="FirstName"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                กรุณากรอก FirstName
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>         
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validateProductName">
                            <Form.Label>LastName</Form.Label>
                            <Form.Control
                               
                                type="text"
                                value={lastName}
                                placeholder="lastName"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                กรุณากรอก LastName
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>        
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validateProductName">
                            <Form.Label>เพศ</Form.Label>
                            <Form.Select
                                value={userTypeId}
                                onChange={(e) => setUserTypeId(e.target.value)}
                                required>
                                <option label="กรุณาเลือกเพศ"></option>
                                {
                                    userTypes.map(item => (
                                        <option
                                            key={item.user_type_id}
                                            value={item.user_type_id}>{item.user_type_name}</option>
                                    ))
                                }
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                กรุณาเลือกเพศ
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row> 
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validateProductName">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                               
                                type="text"
                                value={email}
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                กรุณากรอก Email
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>         
                    
                    <Row className="mb-3">
                        <Button variant="primary" as="input" type="submit" value="SAVE" />
                    </Row>
                </Form>
            </div>
            </>
    );
}