import TableHeader from "../TableHeader/TableHeader"
import DataSource from '../DataSource';
import { useState } from 'react';
import './Table.css'
import { useMediaQuery } from "react-responsive";
const Table = () =>{

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 639px)" });
  const isLaptopOrDesktop = useMediaQuery({ query: "(min-width: 640px)" });
  const [data,setData] = useState(DataSource);

  const SourceData = data;

  console.log(SourceData)

    return(
    <div className="table">
      <div className="ms-Grid" dir="ltr">

        { isTabletOrMobile &&(
          SourceData.map((data) =>(
            <div className="ms-Grid-row my-3"> {/*row wrapping*/}
                <TableHeader/>
                    <div className="ms-Grid-col ms-sm4 ms-lg12">
                        <div className="ms-Grid-col ms-sm12 ms-lg4 border-dark">
                            <p>{data.nama}</p>
                        </div>
                        <div className="ms-Grid-col ms-sm12 ms-lg4 border-dark">
                            <p>{data.umur}</p>
                        </div>
                        <div className="ms-Grid-col ms-sm12 ms-lg4 border-dark">
                            <p>{data.hobby}</p>
                        </div>
                    </div>                                   
            </div>
          ))
        )}

            { isLaptopOrDesktop &&(
                <div className="ms-Grid-row mb-3"> {/*row wrapping*/}
                  <TableHeader/>
                  {SourceData.map((data) =>(
                      <div className="ms-Grid-col ms-sm4 ms-lg12">
                        <div className="ms-Grid-col ms-sm12 ms-lg4">
                            <p>{data.nama}</p>
                        </div>
                        <div className="ms-Grid-col ms-sm12 ms-lg4">
                            <p>{data.umur}</p>
                        </div>
                        <div className="ms-Grid-col ms-sm12 ms-lg4">
                            <p>{data.hobby}</p>
                        </div>
                      </div>                                   
                    ))}
                  </div>
              )}

      </div>
    </div>
    )
}

export default Table