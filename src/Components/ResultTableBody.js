const ResultTableBody=(props)=>{
    return(
        <tr>
            <td>{props.tableData.year}</td>
            <td>${Math.round(props.tableData.savingsEndOfYear)}</td>
            <td>${Math.round(props.tableData.yearlyInterest)}</td>
            <td>${Math.round(props.tableData.prev)}</td>
            <td>${Math.round(props.tableData.yearlyContribution)}</td>
        </tr>
    );
}
export default ResultTableBody;