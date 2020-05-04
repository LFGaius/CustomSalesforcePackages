import { LightningElement,api } from 'lwc';

const columns = [
    { label: 'Product Code', fieldName: 'productCode',editable:true,sizeSmall:4,sizeMedium:4,sizeLarge:4 },
    { label: 'Line type', fieldName: 'lineType',sizeSmall:4,sizeMedium:4,sizeLarge:4 },
    { label: 'Codes', fieldName: 'codes',sizeSmall:4,type:'picklist',sizeMedium:4,sizeLarge:4 }];

const datas=[
    {productCode:'cde0',lineType:'ltp0',codes:{value:'v1',options:[
                                                                    {value:'v0',label:'l0'},
                                                                    {value:'v1',label:'l1'},
                                                                    {value:'v2',label:'l2'}]}}
];

export default class NlLwcCustomDatatable extends LightningElement {
    @api listData=datas;
    @api columns=columns;

    options=[{value:'v0',label:'l0'},{value:'v1',label:'l1'},{value:'v2',label:'l2'}];

    get _columns(){
        let cols=[];
        if(this.columns)
            this.columns.forEach(col=>{
                let cls=''+(col.sizeSmall?'slds-small-size_'+col.sizeSmall+'-of-12':'')
                        +''+(col.sizeMedium?' slds-medium-size_'+col.sizeMedium+'-of-12':'')
                        +''+(col.sizeLarge?' slds-large-size_'+col.sizeLarge+'-of-12':'');

                let cl={...col,class:cls};
                cols.push(cl);
            });
        return cols;
    }

    get _data(){
        let data=[];
        if(this.listData)
            this.listData.forEach(line=>{
                let ln=[];
                this.columns.forEach(column=>{
                    ln.push({
                        value:column.type==='picklist'?line[column.fieldName].value:line[column.fieldName],noteditable:column.editable?false:true ,
                        withType:column.type?true:false,picklist:column.type==='picklist'?true:false,options:column.type==='picklist' && line[column.fieldName].options});
                })
                data.push(ln);
            });
        return data;
    }
}