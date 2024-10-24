import "./DetailsPanel.css";
//import "./w3.css";

function DetailsPanel({DetailsClass, TableClass}) {

    

    return (
        <div className={DetailsClass+" DetailsPanel"}>
        <div className={TableClass+" DetailsTable"}>
        
            
            <table cellSpacing="0" cellPadding="8" border="1" className=" DetailsTable w-full text-center text-black ">
                <tbody >
                    <tr>
                        <th className="w-6/12">RBC</th>
                        
                        <th className="w-2/12" >Test</th>
                        <th className="w-4/12">Test</th>
                    </tr>
                    <tr >
                        <td >Test</td>
                        <td >Test</td>
                        <td >Test</td>
                    </tr>
                    <tr >
                        <td >Test</td>
                        <td >Test</td>
                        <td >Test</td>
                    </tr>
                    <tr >
                        <td >Test</td>
                        <td >Test</td>
                        <td >Test</td>
                    </tr>
                    <tr >
                        <td >Test</td>
                        <td >Test</td>
                        <td >Test</td>
                    </tr>
                    <tr >
                        <td >Test</td>
                        <td >Test</td>
                        <td >Test</td>
                    </tr>
                    <tr >
                        <td >Test</td>
                        <td >Test</td>
                        <td >Test</td>
                    </tr>
                    <tr >
                        <td >Test</td>
                        <td >Test</td>
                        <td >Test</td>
                    </tr>
                    
                    {/* WBC */}
                    <tr>
                        <th className="w-6/12">WBC</th>
                        <th className="w-2/12" >Test</th>
                        <th className="w-4/12">Test</th>
                    </tr>
                    <tr >
                        <td >Test</td>
                        <td >Test</td>
                        <td >Test</td>
                    </tr>
                    <tr >
                        <td >Test</td>
                        <td >Test</td>
                        <td >Test</td>
                    </tr>
                    <tr >
                        <td >Test</td>
                        <td >Test</td>
                        <td >Test</td>
                    </tr>
                    <tr >
                        <td >Test</td>
                        <td >Test</td>
                        <td >Test</td>
                    </tr>
                    
                </tbody>
            </table>
            <table cellSpacing="0" cellPadding="8" border="1" className="DetailsTable w-full ">
                <tbody >
                    <tr  >
                        <th colSpan={2}>Test</th>
                        
                    </tr>
                    <tr>
                        <td >Test</td>
                        <td >Test</td>
                    </tr>
                    <tr >
                        <td >Test</td>
                        <td >Test</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default DetailsPanel