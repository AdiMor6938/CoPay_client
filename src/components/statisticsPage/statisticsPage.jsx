import * as React from 'react';
import PieChart, {
    Series,
    Label,
    Connector,
    Size,
    Export,
} from 'devextreme-react/pie-chart';

const data = [
    { category: 'Restaurants', amount: 9000 },
    { category: 'Licences', amount: 10000 },
    { category: 'Parking lots', amount: 2000 },
    { category: 'Business travel', amount: 20000 },
    { category: 'Transportation', amount: 3000 }
];

const pointClickHandler = (e) => {
    toggleVisibility(e.target);
}

const legendClickHandler = (e) => {
    const arg = e.target;
    const item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

    toggleVisibility(item);
}

const toggleVisibility = (item) => {
    item.isVisible() ? item.hide() : item.show();
}

const StatisticsPage = () => {
    return (
        <PieChart
            id="pie"
            dataSource={data}
            palette="Bright"
            title="Expenses"
            onPointClick={pointClickHandler}
            onLegendClick={legendClickHandler}
            style={{marginTop:'5%'}}
        >
            <Series
                argumentField="category"
                valueField="amount"
            >
                <Label visible={true}>
                    <Connector visible={true} width={1} />
                </Label>
            </Series>

            <Size width={500} />
            <Export enabled={true} />
        </PieChart>);
}

export default StatisticsPage;

