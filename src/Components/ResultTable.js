import ResultTableBody from "./ResultTableBody";
const ResultTable=(props)=>{
    return(
        <table className="result">
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