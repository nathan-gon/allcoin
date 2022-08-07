import { Button } from "@mui/material";
import { ChartParmas } from "../../app/model/coin";

interface Props {
    day: { label: string, value: string },
    setChartParams: (charparmas: ChartParmas) => void,
    id: string
}



export default function DaysButton({ day, setChartParams, id }: Props) {

    const { label, value } = day

    return (
        <Button
            onClick={() => {
                setChartParams(new ChartParmas(id, value))
            }}  >
            {label}
        </Button>
    )


}