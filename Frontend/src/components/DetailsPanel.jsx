import "./DetailsPanel.css";
//import "./w3.css";

function DetailsPanel({DetailsClass, TableClass}) {

    

    return (
        <div className={DetailsClass+" DetailsPanel"}>
        <div className={TableClass+" DetailsTable"}>
        
            
            <table cellSpacing="0" cellPadding="8" border="1" className=" DetailsTable w-full text-center text-black ">
                <tbody >
                    <tr>
                        <th className="w-8/12">RBC</th>
                        
                        <th className="w-2/12" >Count</th>
                        <th className="w-2/12">Percentage</th>
                    </tr>
                    <tr >
                        <td >Angled Cells</td>
                        <td >222</td>
                        <td >67%</td>
                    </tr>
                    <tr >
                        <td >Borderline Ovalocytes</td>
                        <td >50</td>
                        <td >20%</td>
                    </tr>
                    <tr >
                        <td >Burr Cells</td>
                        <td >87</td>
                        <td >34%</td>
                    </tr>
                    <tr >
                        <td >Frangulated Cells</td>
                        <td >2</td>
                        <td >0.12%</td>
                    </tr>
                    <tr >
                        <td >Ovalocytes</td>
                        <td ></td>
                        <td ></td>
                    </tr>
                    <tr >
                        <td >Rounded RBC</td>
                        <td ></td>
                        <td ></td>
                    </tr>
                    <tr >
                        <td >Teardrops</td>
                        <td ></td>
                        <td ></td>
                    </tr>
                    
                    {/* WBC */}
                    <tr>
                        <th className="w-8/12">WBC</th>
                        <th className="w-2/12" >Count</th>
                        <th className="w-2/12">Percentage</th>
                    </tr>
                    <tr >
                        <td >Basophil</td>
                        <td >222</td>
                        <td >67%</td>
                    </tr>
                    <tr >
                        <td >Eosinophil</td>
                        <td >50</td>
                        <td >20%</td>
                    </tr>
                    <tr >
                        <td >Lymphocyte</td>
                        <td >87</td>
                        <td >34%</td>
                    </tr>
                    <tr >
                        <td >Monocyte</td>
                        <td >2</td>
                        <td >0.12%</td>
                    </tr>
                    
                </tbody>
            </table>
            <table cellSpacing="0" cellPadding="8" border="1" className="DetailsTable w-full ">
                <tbody >
                    <tr  >
                        <th colSpan={2}>Platelets</th>
                        
                    </tr>
                    <tr>
                        <td >Count</td>
                        <td >222</td>
                    </tr>
                    <tr >
                        <td >Percentage</td>
                        <td >22%</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default DetailsPanel