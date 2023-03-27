import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { API_GET, API_POST } from "./api";
import ProductItem from "./ProductItem";
import "./Home.css";
import UserItem from "./UserItem";
import img1 from "./images/istockphoto-1254474165-170667a.jpg";

export const addToCart = async (order_id, user_id, product_id, price) => {
    try {
        const response = await fetch(`http://localhost:8080/orders/${order_id}/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: user_id,
                product_id: product_id,
                price: price,
            }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export default function Home() {
    const [productTypes, setProductTypes] = useState([]);
    const [productTypeId, setProductTypeId] = useState(0);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [user, setUser] = useState([]);
    const [users, setUsers] = useState([]);
    const [userTypes, setUserTypes] = useState([]);
    const [userTypeId, setUserTypeId] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:8080/api/product_types", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("access_token"),
                },
            });

            let json = await response.json();
            setProductTypes(json.data);
        }

        fetchData();
    }, []);

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
                "http://localhost:8080/api/products/type/" + productTypeId,
                {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "content-Type": "application/json",
                        Authorization: "Bearer " + localStorage.getItem("access_token"),
                    },
                }
            );

            const json = await response.json();
            setProducts(json.data);
        }
        fetchData();
    }, [productTypeId]);
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



    const fetchProducts = async () => {
        let json = await API_GET("products/type/" + productTypeId);
        setProducts(json.data);
    };

    const fetchUsers = async () => {
        let json = await API_GET("users/type/" + userTypeId);
        setUsers(json.data);
    }

    const onDelete = async (data) => {
        let json = await API_POST("product/delete", {
            product_id: data.product_id,
        });

        if (json.result) {
            fetchProducts();
        }
    };

     const onDeleteU = async (data) => {
        let json = await API_POST("user/delete", {
            user_id: data.user_id
        });

        if (json.result) {
            fetchUsers();
        }
    }

    {
        products && products.map((item) => (
            <ProductItem
                key={item.product_id}
                data={item}
                onDelete={onDelete}
            />
        ))
    }

    const handleAddToCart = async (product) => {
        const cartItem = {
            product_id: product.product_id,
            user_id: user.user_id,
            price: product.price,
            quantity: 1,
        };

        const response = await fetch('/api/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cartItem)
        });

        if (response.ok) {
            setCartItems([...cartItems, cartItem]);
        }
    }

    useEffect(() => {
        async function fetchUser() {
            const response = await fetch("http://localhost:8080/api/user", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("access_token"),
                },
            });

            let json = await response.json();
            setUser(json.data);
        }

        fetchUser();
    }, []);

    if (localStorage.getItem("access_token")) {
        return (
            <div className="background">
                <div className="nav container">
                
                    <a href="#" className="logo">
                        Green plantnet
                    </a>
                    
                    <i className="bx bx-shopping-bag" id="cart-icon"></i>
                    <div className="cart">
                        <h2 className="cart-title">Your Cart</h2>
                        <div className="cart-content">
                            <i className="bx bxs-trash-alt cart-remove"></i>
                        </div>
                        <div className="total">
                            <div className="total-title">Total</div>
                        </div>
                        <button type="button" className="btn-buy">
                            Buy
                        </button>
                    </div>
                </div>
                
                <div className="buttons-container" >
                <a href="./Register">Profile</a>
                
                </div>
                
                <img src={img1} alt="Flower" className="flower-image" />
                <div className="categories">
                    <select
                        value={productTypeId}
                        onChange={(e) => setProductTypeId(e.target.value)}
                        className="categories"
                    >
                        <option value={0}>ทุกประเภทสินค้า</option>
                        {productTypes.map((item) => (
                            <option key={item.product_type_id} value={item.product_type_id}>
                                {item.product_type}
                            </option>
                        ))}
                    </select>

                    <div className="buttons-container">
                        <Link to={"/product/add"} className="btn btn-outline-primary me-3">
                            เพิ่ม
                        </Link>

                        <Link to={"/report"} className="btn btn-outline-primary me-3">
                            รายงาน
                        </Link>
                    </div>

                    <div className="categories-right"></div>

                    <div className="container mt-3">
                        {products.map((item) => (
                            <ProductItem
                                key={item.product_id}
                                data={item}
                                onDelete={onDelete}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }


    if (localStorage.getItem("access_token")) {
        return (
            <div className="background">
                <div class="nav container">
                    <a href="#" className="logo">
                        Green plantnet
                    </a>
                    <i class="bx bx-shopping-bag" id="cart-icon"></i>
                    <div class="cart">
                        <h2 class="cart-title">Your Cart</h2>
                        <div class="cart-content">
                            <i class="bx bxs-trash-alt cart-remove"></i>
                        </div>
                        <div class="total">
                            <div class="total-title">Total</div>
                        </div>
                        <button type="button" class="btn-buy">
                            Buy
                        </button>
                    </div>
                </div>
                <img src={img1} alt="Flower" className="flower-image" />
                <div className="search-container">
                    <input type="text" className="search-input" placeholder="Search..." />
                </div>
                <div className="categories">
                    <select
                        value={productTypeId}
                        onChange={(e) => setProductTypeId(e.target.value)}
                        className="categories"
                    >
                        <option value={0}>ทุกประเภทสินค้า</option>
                        {productTypes.map((item) => (
                            <option key={item.product_type_id} value={item.product_type_id}>
                                {item.product_type}
                            </option>
                        ))}
                    </select>

                    <div className="buttons-container">
                        <Link to={"/product/add"} className="btn btn-outline-primary me-3">
                            เพิ่ม
                        </Link>

                        <Link to={"/report"} className="btn btn-outline-primary me-3">
                            รายงาน
                        </Link>
                    </div>

                    <div className="categories-right"></div>

                    <div className="container mt-3">
                        {products.map((item) => (
                            <ProductItem
                                key={item.product_id}
                                data={item}
                                onDelete={onDelete}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return <Navigate to="/" replace />;
    return <Navigate to="/" replace />;
}