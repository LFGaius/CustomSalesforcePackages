import { LightningElement,track } from 'lwc';

export default class JkClient extends LightningElement {
    listdata1=[{rowid:'0',codicesocieta:'2432',codicepv:'vdxc',insegna:'qwre',numdc:'234324',messedc:'46546',importolordo:32.3,importonetto:9.0,importocomm:12}];
    listdata2=[{rowid:'0',codicesocieta:'3123231',insegna:'fsdfsd',microfilm:'fdssdf',nrocontabile:'24342',datariepilogo:'sdfsd',tipotransazione:'fsdfsd',numlaghandi:'12',perccommis:12.4,importolordo:12.4,importonello:12.4,importocommis:12.4,abjfilsale:12.4}];
    
    
    @track displaying_detail;
    @track displaying_list1=true;
    @track displaying_list2=true;
    @track search_params={
        e_c:false,
        movimenti:false,   
        dataDA:'',
        dataA:''
    }

    // updateSearchParams(params){
    //     this.search_params={...this.search_params,...params};
    // }

    // onStornoAction(event){
    //     this.displaying_detail=true;
    //     this.displaying_list=false;
    // }

    // onAutorizzazioni(event){
    //     this.displaying_detail=true;
    //     this.displaying_list=false;
    // }

    // onNumeroCarta(event){
    //     this.displaying_detail=true;
    //     this.displaying_list=false;
    // }

    // onGoBack(){
    //     this.displaying_list=true;
    //     this.displaying_detail=false;
    // }

    onRicerca(){
        this.displaying_list1=true;
        this.displaying_list2=true;
    }

    onAnnula(){
        this.displaying_list1=false;
        this.displaying_list2=false;
        this.displaying_detail=false;
        // this.search_params={
        //     stratus:false,
        //     cics:false,
        //     peresercente:false,
        //     percarta:false
        // }
    }
}