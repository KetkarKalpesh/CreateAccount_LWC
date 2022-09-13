import { LightningElement } from 'lwc';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone';
import ACCOUNT_TYPE from '@salesforce/schema/Account.Type';
import Account_RATING from '@salesforce/schema/Account.Rating';
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class CraeteAccount extends LightningElement {

    objectApiName = 'Account';
    fieldList = [ACCOUNT_NAME, ACCOUNT_PHONE, ACCOUNT_TYPE, Account_RATING, ACCOUNT_INDUSTRY];
    handleAccountCreate(event){
        const evt = new ShowToastEvent({
            title : "Account Created",
            message : "Record ID: " + event.detail.id,
            variant : "success",
        });
        this.dispatchEvent(evt);
        
    }

}
