import { LightningElement,track } from 'lwc';

export default class NlClient extends LightningElement {
    listdata=[{rowid:'0',autorizzazioni:'123432',data:'260220',numerocarta:'1234213542',importo:'12,45',ora:'dassda'}];
    @track displaying_detail;
    @track displaying_list;
    @track search_params={
        // stratus:false,
        // cics:false,
        // peresercente:false,
        // percarta:false
        carta:'',
        codiceeserscente:'',
        microfilm:'',
        autorizzazione:'',
        da:'',
        a:'',
        daora:'',
        aora:''
    };

    updateSearchParams(params){
        this.search_params={...this.search_params,...params};
    }

    onStornoAction(event){
        this.displaying_detail=true;
        this.displaying_list=false;
    }

    onAutorizzazioni(event){
        this.displaying_detail=true;
        this.displaying_list=false;
    }

    onNumeroCarta(event){
        this.displaying_detail=true;
        this.displaying_list=false;
    }

    onGoBack(){
        this.displaying_list=true;
        this.displaying_detail=false;
    }

    onCerca(){
        this.displaying_list=true;
    }

    onAnnula(){
        this.displaying_list=false;
        this.displaying_detail=false;
        this.search_params={
            stratus:false,
            cics:false,
            peresercente:false,
            percarta:false
        }
    }
}