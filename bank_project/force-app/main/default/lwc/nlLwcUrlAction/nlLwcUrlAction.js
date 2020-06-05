import { LightningElement,api } from 'lwc';

export default class NlLwcUrlAction extends LightningElement {
    @api value;
    @api name;


    onUrlAction(){debugger
        this.dispatchEvent(new CustomEvent('rowcustomaction',{
            composed: true,
            bubbles: true,
            cancelable: true,
            detail:{action:{name:this.name},row:{rowid:this.value.rowid}}
        }));
    }
}