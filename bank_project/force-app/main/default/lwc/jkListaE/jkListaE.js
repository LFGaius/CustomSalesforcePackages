import { LightningElement, track,api} from 'lwc';


const columns = [
    {label: 'Codice societa', fieldName: 'codicesocieta'},//,type:'linkAction',typeAttributes:{name:'autorizzazioni'}},
    // { label: 'Autorizzazioni', fieldName: 'autorizzazioni' ,type:'url'},
    { label: 'Codice PV', fieldName: 'codicepv' },
    {label: 'Insegna', fieldName: 'insegna'},
    // { label: 'Numero Carta', fieldName: 'numerocarta',type:'url' },
    { label: 'Num D/C', fieldName: 'numdc'},
    { label: 'Mese DC', fieldName: 'messedc',type: 'linkAction',typeAttributes:{name:'messedc'} },
    { label: 'Importo Lordo', fieldName: 'importolordo', type: 'number'/*, editable: true*/},
    { label: 'Importo Netto', fieldName: 'importonetto', type: 'number' },
    { label: 'Importo Comm', fieldName: 'importocomm', type: 'number' },
    // { type:'button',typeAttributes: { label: 'Storno',name:'storno',variant:'brand' }},
];

export default class JkListaE extends LightningElement {
    @api options= [];

    get _options(){
        return this.options.map(e=>({...e,messedc:{rowid:e.rowid,value:e.messedc}}));
    }
    @track columns = columns;
    @track indexSelectedRowForEdit=-1;
    @track selectedRow={};//the row we are manipulating

    

    handleRowCustomAction(event) {debugger
        const actionName = event.detail.action.name;
        const row = event.detail.row;
        // switch (actionName) {
        //     // case 'autorizzazioni':
        //     //     this.dispatchEvent(new CustomEvent('autorizzazioni'));
        //     // break;
        //     // case 'numerocarta':
        //     //     this.dispatchEvent(new CustomEvent('numerocarta'));
        //     // break;
        //     // default:
        // }

        event.stopPropagation();
        
    }

    handleRowAction(event) {debugger
        // const actionName = event.detail.action.name;
        // const row = event.detail.row;
        // switch (actionName) {
        //     // case 'storno':
        //     //     this.dispatchEvent(new CustomEvent('storno'));
        //     // break;
        //     // default:
        // }
    }

    // findRowIndexByRowId(rowid) {
    //     return this.options.findIndex(row=>(row.rowid === rowid));
    // }

    // handleSaveRow(event){debugger
    //     let prodlist=[...this._data];
    //     let editableValues=event.detail;//editable values (linetype,quantity,length,note)
        
        
    //     let ind=this.indexSelectedRowForEdit;
    //     if(ind!==-1){
    //         let unitpparams={...prodlist[ind].checkPriceParams};//retrieve the param for getUnitPrice and apply to him modifications
    //        unitpparams.quantity=''+editableValues.quantity;
            
    //         const {rowid,id,productCode,codes,uom1,uom2,productDescription,shortComposition,doganaCode,productCollection,deleted,unitprice}=prodlist[ind];
        
    //         let newprod={rowid:rowid,id:id,productCode:productCode,lineType:editableValues.lineType,codes,
    //             q1:(editableValues.quantity||'')+' '+uom1,q2:(editableValues.length||'')+' '+(uom2||''),
    //             uom1:uom1,uom2:uom2,productDescription:productDescription,shortComposition:shortComposition,
    //             doganaCode:doganaCode,quantity:editableValues.quantity ,length:editableValues.length,
    //             qtaMin:editableValues.qtaMin,qtaMax:editableValues.qtaMax,
    //             checkPriceParams:unitpparams,productCollection:productCollection,unitprice:unitprice,
    //             deleted:deleted,note:editableValues.note,quantityconf:editableValues.quantityconf};
    //         prodlist[ind]=newprod;
    //     }
        
    //     this.dispatchEvent(new CustomEvent('nlupdatedatatable',{
    //         detail:prodlist
    //     }));

    //     const evt = new ShowToastEvent({
    //         title: 'Changes Saved!',
    //         variant: 'success',
    //         mode: 'dismissable'
    //     });

    //     this.closePopupEditRow();

    //     this.dispatchEvent(evt);

    // }

}