import { LightningElement,api } from 'lwc';

export default class NlLwcCustomFieldView extends LightningElement {
    @api label;
    @api truncate;
    @api value;
    @api richText;
    @api variant="label-top";//['label-left','label-top','label-hidden']

    get isLabelTop(){
        return (this.variant==="label-top")?true:false;
    }

    get isLabelLeft(){
        return (this.variant==="label-left")?true:false;
    }

    get isLabelHidden(){
        return (this.variant==="label-hidden")?true:false;
    }
}