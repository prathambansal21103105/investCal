import ResultTableBody from "./ResultTableBody";
import classes from './ResultTable.module.css';
const ResultTable=(props)=>{
    return(
        <table className={classes.result}>
            <thead>
            <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
                {props.data.map((dataEntry)=>(
                    <ResultTableBody key={dataEntry.year} tableData={dataEntry}/>
                ))}
            </tbody>
        </table>
    );
}
export default ResultTable;