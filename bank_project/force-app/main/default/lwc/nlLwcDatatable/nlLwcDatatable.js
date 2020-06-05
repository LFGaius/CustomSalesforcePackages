import { LightningElement, track,api} from 'lwc';


const columns = [
    {label: 'Autorizzazioni', fieldName: 'autorizzazioni' ,type:'linkAction',typeAttributes:{name:'autorizzazioni'}},
    // { label: 'Autorizzazioni', fieldName: 'autorizzazioni' ,type:'url'},
    { label: 'Ora', fieldName: 'ora' },
    {label: 'Numero Carta', fieldName: 'numerocarta' ,type:'linkAction',typeAttributes:{name:'numerocarta'}},
    // { label: 'Numero Carta', fieldName: 'numerocarta',type:'url' },
    { label: 'Importo', fieldName: 'importo', type: 'number'},
    { label: 'Retail', fieldName: 'retail' },
    { label: 'Tipo', fieldName: 'tipo'/*, editable: true*/},
    { label: 'Note', fieldName: 'note' },
    { type:'button',typeAttributes: { label: 'Storno',name:'storno',variant:'brand' }},
];

export default class NlLwcDatatable extends LightningElement {
    @api options= [];

    get _options(){
        return this.options.map(e=>({...e,autorizzazioni:{rowid:e.rowid,value:e.autorizzazioni},numerocarta:{rowid:e.rowid,value:e.numerocarta}}));
    }
    @track columns = columns;
    @track indexSelectedRowForEdit=-1;
    @track selectedRow={};//the row in manipulation
    @track pricesdata;

    

    handleRowCustomAction(event) {debugger
        const actionName = event.detail.action.name;
        const row = event.detail.row;
        switch (actionName) {
            case 'autorizzazioni':
                this.dispatchEvent(new CustomEvent('autorizzazioni'));
            break;
            case 'numerocarta':
                this.dispatchEvent(new CustomEvent('numerocarta'));
            break;
            default:
        }

        event.stopPropagation();
        
    }

    handleRowAction(event) {debugger
        const actionName = event.detail.action.name;
        const row = event.detail.row;
        switch (actionName) {
            case 'storno':
                this.dispatchEvent(new CustomEvent('storno'));
            break;
            default:
        }
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