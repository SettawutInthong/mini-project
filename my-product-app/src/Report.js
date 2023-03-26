import { useEffect, useRef, useState } from "react";
import { Bar, getElementAtEvent } from "react-chartjs-2";
import { API_GET } from "./api";
import ProductItem from "./ProductItem"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    Plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'รายงานจำนวนสินค้า',
        },
    },
};

export default function Repost() {
    const [isLoading, setIsLoading] = useState(false);
    const [chartData, setChartData] = useState({});
    const [store, setStore] = useState([]);
    const [productStore, setProductStore] = useState([]);
    const chartRef = useRef();

    useEffect(() => {
        async function fetchData() {
            let json = await API_GET("report");

            setStore(json.data);

            var labels = [];
            var data = [];

            for (var i = 0; i < json.data.length; i++) {
                var item = json.data[i];
                labels.push(item.product_type);
                data.push(item.product_count);
            }

            var dataset = {
                labels: labels,
                datasets: [
                    {
                        label: "จำนวนสินค้าแยกตามประเภทสินค้า",
                        data: data,
                        backgroundColor: "rgba(25, 91, 192, 0.5)"
                    }
                ]
            }

            setChartData(dataset);
            setIsLoading(true);
        }

        fetchData();
    }, []);

    const getChart = () => {
        if (isLoading) {
            return <Bar options={options}
                data={chartData}
                ref={chartRef}
                onClick={onClick} />;
        }

        return <></>;
    }

    const onClick = async (event) => {
        var element = getElementAtEvent(chartRef.current, event);
        var index = element[0].index;

        await getProducts(store[index].product_type_id);
    }

    const getProducts = async (productTypeId) => {
        let json = await API_GET("products/type/" + productTypeId);
        setProductStore(json.data);
    }

    return (
        <>
            <div className="container-fluid mt-3">
                {
                    getChart()
                }
            </div>

            <div className="container-fluid mt-3 d-flex flex-wrap justify-content-center align-items-start">
                {
                    productStore.map(item => (
                        <ProductItem
                            key={item.product_id}
                            data={item} />
                    ))
                }
            </div>
        </>
    );

}