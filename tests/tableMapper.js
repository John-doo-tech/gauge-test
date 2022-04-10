function getTableMapping(table){
    let table_mpped = []
    for(let row in table.rows){
        table_mpped[row] = new Object();
        for(let column in table.headers.cells){
            table_mpped[row][table.headers.cells[column]] = table.rows[row].cells[column]
        }
        
    }
    return table_mpped
}
module.exports={
    getTableMapping
}