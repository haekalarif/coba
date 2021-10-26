import './TableHeader.css'
const TableHeader = () =>{
    return(
      <div className="ms-Grid-col ms-sm4 ms-lg12">
        <div className="ms-Grid-col ms-sm12 ms-lg4 border-white bg-primary">
            <p className="text-header">Nama</p>
        </div>
        <div className="ms-Grid-col ms-sm12 ms-lg4 border-white bg-primary">
            <p className="text-header">Umur</p>
        </div>
        <div className="ms-Grid-col ms-sm12 ms-lg4 border-white bg-primary">
            <p className="text-header">Hobby</p>
        </div> 
      </div>
    )
}

export default TableHeader