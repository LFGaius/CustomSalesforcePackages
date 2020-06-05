import LightningDatatable from 'lightning/datatable';
import urlAction from './urlAction.html';

export default class NlLwcCustomDatable extends LightningDatatable {
    static customTypes = {
        linkAction: {
            template: urlAction,
            standardCellLayout: true,
            typeAttributes: ['name']
        }
    };
}