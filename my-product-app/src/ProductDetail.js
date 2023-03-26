// import 'bootstrap/dist/css/bootstrap.min.css';
import { API_GET, API_POST } from "./api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import { SERVER_URL } from "./app.config";

export default function ProductDetail() {
    let params = useParams();

    const [productId, setProductId] = useState(0);
    const [productName, setProductName] = useState("");
    const [productTypes, setProductTypes] = useState([]);
    const [productTypeId, setProductTypeId] = useState(0);
    const [price, setPrice] = useState(0);
    const [size, setSize] = useState(0);
    const [stock, setStock] = useState(0);
    const [validated, setValidated] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const [selectedFile, setSelectedFile] = useState("");

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                "http://localhost:8080/api/product_types",
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
            setProductTypes(json.data);
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData(productId) {
            let json = await API_GET("product/" + productId);

            var data = json.data[0];

            setProductId(data.product_id);
            setProductName(data.product_name);
            setProductTypeId(data.product_type_id);
            setPrice(data.price);
            setSize(data.size);
            setStock(data.stock);
            setImageUrl(data.image_url);
        }

        if (params.productId != "add") {
            fetchData([params.productId]);
        }
    }, [params.productId]);

    const onFileSelected = (e) => {
        if (e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
        }
    }

    const onUploadImage = async () => {
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

if (json.result) {
    setImageUrl(json.data);
}
    }

    const getImageComponent = () => {
        return (
            <div className="container m-auto">
                <Form>
                    <Row>
                        <Form.Group as={Col} md="3" controlId="formImage" className="mb-3">
                            <img src={`${SERVER_URL}${imageUrl}`} width={100} alt="Upload status" />
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
    }


    const doCreateProduct = async () => {
        const response = await fetch(
            "http://localhost:8080/api/product/add",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + localStorage.getItem("access_token")
                },
                body: JSON.stringify({
                    product_name: productName,
                    product_type_id: productTypeId,
                    size: size,
                    price: price,
                    stock: stock
                })
            }
        );
        let json = await response.json();
        if (json.result) {
            window.location = "/home";
        }
    }

    const doUpdateProduct = async () => {
        const json = await API_POST("product/update", {
            product_id: productId,
            product_name: productName,
            product_type_id: productTypeId,
            size: size,
            price: price,
            stock: stock,
        });

        if (json.result) {
            window.location = "/home";
        }
    }

    const onSave = (event) => {
        const form = event.currentTarget;
        event.preventDefault();

        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            if (params.productId == "add") {
                doCreateProduct();
            } else {
                doUpdateProduct();
            }
        }

        setValidated(true);
    }

    return (
        <>
            {
                
                    getImageComponent()
                    
            }

            <div className="container m-auto">
                <Form noValidate validated={validated} onSubmit={onSave}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validateProductName">
                            <Form.Label>ชื่อสินค้า</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                value={productName}
                                placeholder="ชื่อสินค้า"
                                onChange={(e) => setProductName(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                กรุณากรอก ชื่อสินค้า
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validateProductName">
                            <Form.Label>ประเภทสินค้า</Form.Label>
                            <Form.Select
                                value={productTypeId}
                                onChange={(e) => setProductTypeId(e.target.value)}
                                required>
                                <option label="กรุณาเลือกประเภทสินค้า"></option>
                                {
                                    productTypes.map(item => (
                                        <option
                                            key={item.product_type_id}
                                            value={item.product_type_id}>{item.product_type}</option>
                                    ))
                                }
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                กรุณากรอก ประเภทสินค้า
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validateProductName">
                            <Form.Label>ราคาสินค้า</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                value={price}
                                min={0}
                                placeholder="ราคาสินค้า"
                                onChange={(e) => setPrice(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                กรุณากรอก ราคาสินค้า
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validateProductName">
                            <Form.Label>ขนาดกระถาง</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                value={size}
                                min={0}
                                placeholder="ราคาสินค้า"
                                onChange={(e) => setSize(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                กรุณากรอก ขนาดกระถาง
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>


                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validateProductName">
                            <Form.Label>จำนวนสินค้า</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                value={stock}
                                min={0}
                                placeholder="ราคาสินค้า"
                                onChange={(e) => setStock(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                กรุณากรอก จำนวนสินค้า
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