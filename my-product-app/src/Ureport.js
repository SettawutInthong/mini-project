import { useEffect, useRef, useState } from "react";
import { Bar, getElementAtEvent } from "react-chartjs-2";
import { API_GET } from "./api";
import UserItem from "./UserItem"
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
            text: 'รายงานเพศผู้ใช้',
        },
    },
};

export default function Repost() {
    const [isLoading, setIsLoading] = useState(false);
    const [chartData, setChartData] = useState({});
    const [store, setStore] = useState([]);
    const [userStore, setUserStore] = useState([]);
    const chartRef = useRef();

    useEffect(() => {
        async function fetchData() {
            let json = await API_GET("ureport");

            setStore(json.data);

            var labels = [];
            var data = [];

            for (var i = 0; i < json.data.length; i++) {
                var item = json.data[i];
                labels.push(item.user_type_name);
                data.push(item.user_count);
            }

            var dataset = {
                labels: labels,
                datasets: [
                    {
                        label: "จำนวนเพศผู้ใช้แยกตามเพศ",
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

    const onClick = async (event) => {
        var element = getElementAtEvent(chartRef.current, event);
        var index = element[0].index;

        await getUsers(store[index].user_type_id);
    }

    const getUsers = async (userTypeId) => {
        let json = await API_GET("users/type/" + userTypeId);
        setUserStore(json.data);
    }

    const getChart = () => {
        if (isLoading) {
            return <Bar options={options}
                data={chartData}
                ref={chartRef}
                onClick={onClick} />;
        }

        return <>
            <div className="container-fluid mt-3">
                {
                    getChart()
                }
            </div>

            <div className="container-fluid mt-3 d-flex flex-wrap justify-content-center align-items-start">
                {
                    userStore.map(item => (
                        <UserItem
                            key={item.user_id}
                            data={item} />
                    ))
                }
            </div>
        
        </>;
    }

    

    

}