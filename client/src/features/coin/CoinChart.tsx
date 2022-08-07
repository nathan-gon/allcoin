import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useStore } from "../../app/mobx/store";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import DaysButton from "./DaysButton";
import { chartDays } from "../../app/model/coin";
import { Box } from "@mui/material";
import { round } from "../../app/helper/helper";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

interface Props {
    id: string
}

export default observer(function CoinChart({ id }: Props) {

    const { coinStore } = useStore()
    const { getChart, chart, chartParams, setChartParmas } = coinStore

    useEffect(() => {
        getChart();
    }, [chartParams.days])

    console.log(chartParams);

    return (
        chart &&
        <div>
            <h1>Coin Chart </h1>
            <div>
                <Line
                    data={{
                        labels: chart.map(coin => {
                            let date = new Date(coin[0])
                            let time =
                                date.getHours() > 12
                                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                                    : `${date.getHours()}:${date.getMinutes()} AM`;
                            return parseInt(chartParams.days) === 1 ? time : date.toLocaleDateString();
                        }),
                        datasets: [
                            {
                                data: chart.map(coin => round(coin[1])),
                                label: `coin price ${chartParams.days} days`,
                                borderColor: "#EEBC1D"
                            }
                        ]
                    }}
                    options={{
                        elements: {
                            point: {
                                radius: 1
                            }
                        }
                    }}

                />
            </div>
            <Box display='flex' justifyContent='space-around' >
                {chartDays.map(day => (
                    <DaysButton key={day.value} day={day}
                        id={id}
                        setChartParams={setChartParmas}
                    />
                ))}

            </Box>

        </div>

    )

})