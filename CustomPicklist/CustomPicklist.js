import { LightningElement,api } from 'lwc';

export default class BnPosConsoleCustomPicklistNew extends LightningElement {
    @api options=[
        {value:'1',label:'1'},
        {value:'2',label:'2'}
    ]
    optionsVisible=true;
    valueSelected='1'

    get labelSelected(){
        return this.options.find(e=>e.value==this.valueSelected)?.label
    }

    onClickInput(event){
        this.optionsVisible=!this.optionsVisible
        event.stopPropagation()//We stop propagation for the document to not listen to the click event(if we don't stop the propagation, the document onclick callback will avoid each time to open the list block)
    }

    onSelectOption(event){debugger
        this.valueSelected=event.currentTarget.dataset.id
        this.optionsVisible=false
        event.stopPropagation()//We stop propagation for the document to not listen to the click event
    }

    /**
     * the document onclick callback is used here to listen to any clicks outside the combobox
     */
    renderedCallback(){
        document.addEventListener('click', ()=>{
            if(this.optionsVisible) this.optionsVisible=false
        })
    }
}