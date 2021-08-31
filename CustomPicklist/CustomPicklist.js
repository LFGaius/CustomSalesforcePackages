import { LightningElement,api } from 'lwc';

const DEFAULT_PLACEHOLDER='Select option...'
export default class BnPosConsoleCustomPicklistNew extends LightningElement {
    @api options=[
        {value:'1',label:'1'},
        {value:'2',label:'2'}
    ]
    @api variant='';
    @api placeholder=DEFAULT_PLACEHOLDER;
    optionsVisible=true;
    valueSelected;
    

    get labelSelected(){
        return this.options.find(e=>e.value==this.valueSelected)?.label
    }

    get boxValueClass(){
        return `slds-input_faux slds-combobox__input slds-align_absolute-center slds-text-align_left ${this.optionsVisible?'slds-has-focus':''} ${this.variant}`
    }

    onClickInput(event){
        this.optionsVisible=!this.optionsVisible
        event.stopPropagation()//We stop propagation for the document to not listen to the click event(if we don't stop the propagation, the document onclick callback will avoid each time to open the list block)
    }

    onSelectOption(event){debugger
        this.optionsVisible=false
        event.stopPropagation()//We stop propagation for the document to not listen to the click event
        if(this.valueSelected!=event.currentTarget.dataset.id){
            this.valueSelected=event.currentTarget.dataset.id
            this.dispatchEvent(new CustomEvent('change',{
                detail:this.options.find(e=>e.value==this.valueSelected)
            }))
        }
    }

    /**
     * the document onclick callback is used here to listen to any clicks outside the combobox
     */
    renderedCallback(){
        if(this.template.querySelector('.slds-dropdown'))
         this.template.querySelector('.slds-dropdown').style.width=`${this.template.querySelector('.slds-combobox').offsetWidth}px`
        document.addEventListener('click', ()=>{
            if(this.optionsVisible) this.optionsVisible=false
        })
    }

    
}
